import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Data({ data }) {
  return (
    <View style={styles.container}>
      {/* <Text>{data.title}</Text> */}
      <Image style={styles.image} source={{ uri: data.imageURL }}></Image>
      <View style={styles.buyinfo}>
        <Text>300.00 RSD</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "white",
            }}
            children="Buy"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";
const styles = StyleSheet.create({
  container: {
    // aspectRatio: windowWidth > 700 ? "9.7/16" : "10/16",
    // backgroundColor: "#dbd9d9",
    minHeight: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 15,
    gap: 20,
    padding: 20,
    borderBottomColor: orange,
    borderBottomWidth: 10,
    borderRightWidth: 10,
    borderRightColor: orange,
  },

  // text: {
  //   fontSize: windowWidth > 600 ? 35 : 20,
  //   borderWidth: 1,
  // },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: 350,
    objectFit: "cover",
    alignSelf: "center",
  },
  buyinfo: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: orange,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
