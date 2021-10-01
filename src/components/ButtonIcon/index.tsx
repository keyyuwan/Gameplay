import React from "react";
// RectButton lida melhor com a experiencia do usuário de acordo com a plataforma
// IOS e Android
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./style";

type ButtonIconProps = RectButtonProps & {
  title?: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
