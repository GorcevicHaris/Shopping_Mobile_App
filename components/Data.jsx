import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

function Data({ data }) {
  return (
    <View>
      <Text style={styles.text}>title :{data.product_title}</Text>
      <Text style={styles.text}>description : {data.product_description}</Text>
      <Text style={styles.text}>price : {data.price}</Text>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  text: {
    fontSize: windowWidth > 600 ? 35 : 20,
    color: windowWidth < 600 ? "red" : "black",
    borderWidth: "1px solid black",
  },
});

export default Data;
