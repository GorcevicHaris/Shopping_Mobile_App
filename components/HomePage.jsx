import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import About from "./About";

function HomePage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => setData(response.data.products));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <View style={styles.container1}>
      <Button
        onPress={() => navigation.navigate("About")}
        title="Go to About"
      />
      {data && data.map((data, index) => <About key={index} data={data} />)}
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
  },
});
