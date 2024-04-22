import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

export default function Data({ data }) {
  return (
    <View style={styles.container}>
      <Text>{data.description}</Text>
      <Text>{data.price}</Text>
      <Image style={styles.image} source={{ uri: data.ImageURL }} />
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  text: {
    fontSize: windowWidth > 600 ? 35 : 20,
    borderWidth: "1px solid black",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "100%",
  },
});
