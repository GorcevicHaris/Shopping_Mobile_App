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
import { AntDesign } from "@expo/vector-icons";

export default function Data({ data }) {
  const {
    setSendDataFunction,
    sendDataFunction,
    dataFavorite,
    setDataFavorite,
  } = useContext(CustomContext);
  function handleBuy(item) {
    if (alreadyInCart(item)) {
      alert("vec dodat");
    } else {
      setSendDataFunction((data) => [...data, item]);
    }
  }
  console.log();
  function alreadyInCart(item) {
    return sendDataFunction.some((cartItem) => cartItem.id === item.id);
  }

  function handleFavorite() {
    setDataFavorite(data);
    console.log(dataFavorite);
  }
  return (
    <View style={styles.container}>
      <View>
        <AntDesign
          onPress={handleFavorite}
          name="heart"
          size={29}
          color="#E94B3CFF"
        />
      </View>
      <Text style={styles.textFamily}>{data.title}</Text>
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
const windowWidth = Dimensions.get("window").width;

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
    borderBottomWidth: 7,
    borderBottomColor: siva,
    borderRightWidth: 7,
    borderRightColor: siva,
    flexDirection: "column",
    marginBottom: 25,
  },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: windowWidth > 400 ? 350 : 300,
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
  textFamily: {
    fontFamily: "Georgia",
    fontWeight: "400",
    fontSize: 15,
  },
});

// Aria
