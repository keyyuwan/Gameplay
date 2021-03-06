import React from "react";
// ScrollView -> serve pra quando temos poucos elementos em tela
// ela já joga tudo na tela
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../utils/categories";

import { styles } from "./style";

type CategorySelectProps = {
  categorySelected: string;
  handleSelectCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({
  categorySelected,
  handleSelectCategory,
  hasCheckBox = false,
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
          hasCheckBox={hasCheckBox}
          checked={category.id === categorySelected}
          onPress={() => handleSelectCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
