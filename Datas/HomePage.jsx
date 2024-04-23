import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import Data from "../components/Data";
import products from "../Products/Produtcs.json";
console.log("products", products);
function HomePage() {
  return (
    <View style={styles.container1}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.input} />
          <Feather style={styles.icon} name="search" size={24} />
        </View>
        <FlatList
          numColumns={windowWidth > 700 ? 2 : 1}
          columnWrapperStyle={windowWidth > 700 ? { gap: 10 } : undefined}
          data={products}
          renderItem={({ item }) => <Data key={item} data={item} />}
        />
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;

export default HomePage;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    position: "relative",
    backgroundColor: "blue",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 16,
    padding: 7,
    color: "white",
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 10,
    color: "#E94B3CFF",
  },
});
