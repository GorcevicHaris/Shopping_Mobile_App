import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Dimensions,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Data from "../components/Data";
import axios from "axios";
import product from "../Products/Produtcs.json";
function HomePage() {
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   function getData() {
  //     axios
  //       .get("http://192.168.0.103:4005/product")
  //       .then((res) => setProducts(res.data))
  //       .catch((err) => console.log(err, "neuspesno"));
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    console.log(search);
    setFilteredProducts(
      product.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  console.log("df");
  return (
    <View style={styles.container1}>
      <StatusBar />
      <View style={{ flexDirection: "column", gap: 30 }}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={search}
            onChangeText={(e) => setSearch(e)}
            style={styles.input}
            placeholder="Search products"
            placeholderTextColor={siva}
          />
        </View>

        <FlatList
          numColumns={windowWidth > 700 ? 2 : 1}
          data={filteredProducts ? filteredProducts : ""}
          renderItem={({ item }) => <Data key={item.id} data={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        />
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;

export default HomePage;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f3f3",
  },
  input: {
    flex: 1,
    height: 60,
    borderWidth: 0.2,
    borderColor: orange,
    fontSize: 20,
    color: siva,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "white",
  },
});
