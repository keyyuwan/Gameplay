import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./style";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home" as any);
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas {`\n`}
            jogatinas {`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
