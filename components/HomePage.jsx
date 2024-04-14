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

function HomePage({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      setData(response.data.products);
    });
  }, []);

  function handleClick() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("About");
    }, 1000);
  }

  const renderItem = ({ item }) => <Data data={item} />;
  return (
    <View style={styles.container1}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Button onPress={handleClick} title="Go to About" color="white" />
          <FlatList data={data} renderItem={renderItem} />
        </View>
      )}
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
