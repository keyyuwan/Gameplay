import React from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../utils/categories";

import { styles } from "./style";

type CategorySelectProps = {
  categorySelected: string;
  handleSelectCategory: (categoryId: string) => void;
};

export function CategorySelect({
  categorySelected,
  handleSelectCategory,
}: CategorySelectProps) {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => handleSelectCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
