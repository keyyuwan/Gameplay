import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./style";

type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Teste",
      icon: "image.png",
      owner: true,
    },
    {
      id: "3",
      name: "Teste",
      icon: "image.png",
      owner: true,
    },
    {
      id: "4",
      name: "Teste",
      icon: "image.png",
      owner: true,
    },
    {
      id: "5",
      name: "Teste",
      icon: "image.png",
      owner: true,
    },
    {
      id: "6",
      name: "Teste",
      icon: "image.png",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild
            id={item.id}
            name={item.name}
            icon={item.icon}
            owner={item.owner}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </View>
  );
}
