import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

function DataFavorites({ data }) {
  console.log(data, "data");
  return (
    <View style={styles.container}>
      {/* <Text>{data.title}</Text> */}
      <Image style={styles.image} source={{ uri: data.imageURL }} />
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: windowWidth > 400 ? 350 : 300,
    objectFit: "cover",
    alignSelf: "center",
    borderWidth: 7,
    borderColor: "lightgreen",
  },
});
export default DataFavorites;
