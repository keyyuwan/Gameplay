import React from "react";
import { Image } from "react-native";

import { styles } from "./style";

export function GuildIcon() {
  const uri =
    "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
