import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

function DataFavorites({ data }) {
  console.log(data, "data");
  return (
    <View style={styles.container}>
      <Text>sdlfjsdf</Text>
      <Text>{data.title}</Text>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
      <Text>{data.description}</Text>
      <Text>{data.price}</Text>
      <Text>{data.description}</Text>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "pink",
  },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: windowWidth > 400 ? 350 : 300,
    objectFit: "cover",
    alignSelf: "center",
  },
});
export default DataFavorites;
