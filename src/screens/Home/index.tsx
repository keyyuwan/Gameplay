import React, { useState } from "react";
import { View } from "react-native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

import { styles } from "./style";

export function Home() {
  const [category, setCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          handleSelectCategory={handleSelectCategory}
        />
      </View>
    </View>
  );
}
