import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CustomContext } from "../Context/ContextProvider";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function BasketData({ data, removeProduct }) {
  const [quantity, setQuantity] = useState(1);
  const { totalPrice, setTotalPrice, setSendDataFunction, sendDataFunction } =
    useContext(CustomContext);
  const [tokenValue, setTokenValue] = useState("");
  const onIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      axios.put(
        "http://192.168.0.103:4005/api/updateQuantity",
        {
          quantity: quantity + 1,
          productID: data.id,
        },
        {
          headers: { Authorization: `Bearer ${tokenValue}` },
        }
      );
    }
  };

  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      axios.put(
        "http://192.168.0.103:4005/api/updateQuantity",
        {
          quantity: quantity - 1,
          productID: data.id,
        },
        {
          headers: { Authorization: `Bearer ${tokenValue}` },
        }
      );
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      const tokenValue = await AsyncStorage.getItem("userToken");
      setTokenValue(tokenValue);
    };
    fetchToken();
  }, []);

  const onRemove = async (productID) => {
    axios
      .delete("http://192.168.0.103:4005/api/removeProductFromBasket", {
        headers: { Authorization: `Bearer ${tokenValue}` }, // Dodajte token u zaglavlje za autentifikaciju
        data: { productID: productID }, // Pošaljite userID i productID u telu zahteva
      })
      .then((res) => {
        console.log(res.data.message);
        // Nakon uklanjanja, ovde možete ažurirati stanje korpe
      })
      .catch((err) => {
        console.error(err);
      });
    setSendDataFunction(
      sendDataFunction.filter((datas) => datas.id !== productID)
    );
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
      <View style={styles.buyinfo}>
        <TouchableOpacity
          onPress={() => {
            removeProduct(data.id); // Pretpostavljam da se već brine o uklanjanju sa UI
            onRemove(data.id); // Poziv funkcije onRemove sa productID
          }}
          style={styles.button3}
        >
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDecrement} style={styles.button2}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={onIncrement} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text>{data.price}$</Text>
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
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderRightColor: "#2D2926FF",
    flexDirection: "column",
  },
  image: {
    borderRadius: 25,
    height: 450,
    width: 300,
    objectFit: "cover",
    alignSelf: "center",
  },
  buyinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  button: {
    backgroundColor: "#E94B3CFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: "#2D2926FF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  button3: {
    backgroundColor: orange,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});
