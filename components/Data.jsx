import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { CustomContext } from "../Context/ContextProvider";

export default function Data({ data }) {
  const { setSendDataFunction, sendDataFunction } = useContext(CustomContext);
  function handleBuy(item) {
    if (alreadyInCart(item)) {
      alert("vec dodat");
    } else {
      setSendDataFunction((data) => [...data, item]);
    }
  }

  function alreadyInCart(item) {
    return sendDataFunction.some((cartItem) => cartItem.id === item.id);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
      <View style={styles.buyinfo}>
        <Text>{data.price}$</Text>
        <TouchableOpacity onPress={() => handleBuy(data)} style={styles.button}>
          <Text style={{ color: "white" }}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const orange = "#E94B3CFF";
const siva = "#2D2926FF";

const styles = StyleSheet.create({
  container: {
    minHeight: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 15,
    gap: 20,
    padding: 20,
    borderBottomWidth: 10,
    borderBottomColor: siva,
    borderRightWidth: 10,
    borderRightColor: siva,
    flexDirection: "column",
  },
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
    backgroundColor: siva,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
