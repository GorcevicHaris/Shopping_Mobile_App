import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import About from "./About";
import Data from "./Data";

function HomePage({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      setData(response.data.products);
    });
  }, []);

  const renderItem = ({ item }) => <Data data={item} />;

  return (
    <View style={styles.container1}>
      <Button
        onPress={() => navigation.navigate("About")}
        title="Go to About"
        color="white"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
