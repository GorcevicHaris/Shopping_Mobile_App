import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

function Data({ data }) {
  console.log(data.product_photos[3], "tipake");

  return (
    <View style={styles.container}>
      <Text>{data.product_title}</Text>
      <Image style={styles.image} source={{ uri: data.product_photos[0] }} />
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

export default Data;
