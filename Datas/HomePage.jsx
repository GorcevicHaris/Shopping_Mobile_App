import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import Data from "../components/Data";

function HomePage({ navigation, loader }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://real-time-product-search.p.rapidapi.com/search`, {
        params: {
          q: "Nike shoes",
          country: "us",
          language: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container1}>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={styles.input} />
        <Feather style={styles.icon} name="search" size={24} />
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#E94B3CFF"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList data={data} renderItem={({ item }) => <Data data={item} />} />
      )}
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    position: "relative",
    backgroundColor: "red",
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
