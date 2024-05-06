import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DataFavorites from "../../components/DataFavorites";
import Data from "../../components/Data";
import { CustomContext } from "../../Context/ContextProvider";

export default function Favorites() {
  const { dataFavorite, setDataFavorite } = useContext(CustomContext);
  console.log(dataFavorite, "datafavorites");
  return (
    <View style={styles.container}>
      <FlatList
        data={dataFavorite ? dataFavorite : ""}
        renderItem={({ item }) => <DataFavorites key={item.id} data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
