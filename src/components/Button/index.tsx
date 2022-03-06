import React from "react";
// RectButton lida melhor com a experiencia do usuário de acordo com a plataforma
// IOS e Android
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text } from "react-native";

import { styles } from "./style";

type ButtonIconProps = RectButtonProps & {
  title?: string;
};

export function Button({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
