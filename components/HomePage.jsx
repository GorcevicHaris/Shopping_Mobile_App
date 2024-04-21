import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import About from "./About";
import Data from "./Data";

function HomePage({ navigation, loader }) {
  const [data, setData] = useState([]);

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
        setData(response.data.data).catch((err) => console.log(err));
      });
  }, []);

  return (
    <View style={styles.container1}>
      <Text>fdsfsfd</Text>
      <FlatList data={data} renderItem={({ item }) => <Data data={item} />} />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    padding: 20,
  },
});
