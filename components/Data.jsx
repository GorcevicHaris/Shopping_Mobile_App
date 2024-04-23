import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function Data({ data }) {
  return (
    <View style={styles.container}>
      <Text>{data.title}</Text>
      <Image style={styles.image} source={{ uri: data.imageURL }}></Image>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
    aspectRatio: windowWidth > 700 ? "9.7/16" : "10/16",
  },
  text: {
    fontSize: windowWidth > 600 ? 35 : 20,
    borderWidth: 1,
  },
  image: {
    justifyContent: "center",
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
});
