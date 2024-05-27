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
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export default function Data({ data }) {
  const {
    setSendDataFunction,
    sendDataFunction,
    dataFavorite,
    setDataFavorite,
    setTotalPrice,
    totalPrice,
  } = useContext(CustomContext);
  const token = async () => {
    return await AsyncStorage.getItem("userToken");
  };
  const [tokenValue, setTokenValue] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const tokenValue = await token();
      setTokenValue(tokenValue);
    };
    fetchToken();
  }, [token]);

  function handleBuy(item) {
    if (alreadyInCart(item)) {
      alert("vec dodat");
    } else {
      setSendDataFunction((datas) => [...datas, item]);
      console.log(item, "items", item.fakeQuantity);
      axios.post(
        "http://localhost:4005/api/updateUser",
        {
          quantity: data.fakeQuantity || 1,
          item: item.id,
          id: jwtDecode(tokenValue).userID,
        },
        {
          headers: { Authorization: `Bearer ${tokenValue}` },
        }
      );
    }
  }

  function alreadyInCart(item) {
    return sendDataFunction.some((datas) => datas.id === item.id);
  }

  function handleFavorite(item) {
    if (inCart(item)) {
      alert("Already Added");
    } else {
      setDataFavorite((datas) => [...datas, item]);
    }
  }
  function inCart(item) {
    return dataFavorite.some((datas) => datas.id === item.id);
  }
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.icon}
        onPress={() => handleFavorite(data)}
        name="heart"
        size={29}
        color="#E94B3CFF"
      />
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
    zIndex: 0,
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
  icon: {
    zIndex: 2,
    alignSelf: "flex-end",
  },
});
