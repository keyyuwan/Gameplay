import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { GuildIcon } from "../GuildIcon";

import { theme } from "../../global/styles/theme";
import { styles } from "./style";

export type GuildProps = TouchableOpacityProps & {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

export function Guild({ id, name, icon, owner, ...rest }: GuildProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>

          <Text style={styles.type}>
            {owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </TouchableOpacity>
  );
}
