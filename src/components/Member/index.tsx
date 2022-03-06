import React from "react";
import { Text, View } from "react-native";

import { Avatar } from "../Avatar";

import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

export function Member({ id, username, avatar_url, status }: MemberProps) {
  const { on, primary } = theme.colors;

  const isOnline = status === "online";

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />

      <View>
        <Text style={styles.title}>{username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
}
