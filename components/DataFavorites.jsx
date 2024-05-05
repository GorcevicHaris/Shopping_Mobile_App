import React from "react";
import { View, Image, StyleSheet } from "react-native";

function DataFavorites({ data }) {
  console.log(data, "data");
  return (
    <View style={styles.container}>
      <Text>sdlfjsdf</Text>
      <Text>{data.title}</Text>
      <Image source={{ uri: data.imageURL }} />
      <Text>{data.description}</Text>
      <Text>{data.price}</Text>
      <Text>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: 1000,
    width: 500,
  },
});
export default DataFavorites;
