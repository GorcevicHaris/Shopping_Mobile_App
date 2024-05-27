import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";

function DataFavorites({ data }) {
  const [tokenValue, setTokenValue] = useState("");
  useEffect(() => {
    const fetchToken = async () => {
      const tokenValue = await AsyncStorage.getItem("userToken");
      setTokenValue(tokenValue);
      console.log(tokenValue, "datafarvorites");
    };
    fetchToken();
  }, []);
  console.log(data, "data");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 15,
    gap: 10,
  },
  image: {
    objectFit: "contain",
    borderRadius: 25,
    height: 450,
    width: windowWidth > 400 ? 350 : 300,
    objectFit: "cover",
    alignSelf: "center",
  },
});
export default DataFavorites;
