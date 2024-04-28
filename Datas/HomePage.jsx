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
import products from "../Products/Produtcs.json";

function HomePage() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  function onFilteredProducts({ nativeEvent }) {
    setFilteredProducts(
      products.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  console.log("produkti", products);
  console.log("filtriraniprodukti", filteredProducts);
  function handleSearch() {
    setFilteredProducts(
      filteredProducts.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  return (
    <View style={styles.container1}>
      <StatusBar />
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={search}
            onChangeText={(e) => {
              setSearch(e.toLowerCase());
            }}
            onKeyPress={onFilteredProducts}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="white"
          />
          <Feather
            onPress={handleSearch}
            style={styles.icon}
            name="search"
            size={24}
          />
        </View>
        <FlatList
          numColumns={windowWidth > 700 ? 2 : 1}
          columnWrapperStyle={windowWidth > 700 ? { gap: 10 } : null}
          data={filteredProducts}
          renderItem={({ item }) => <Data key={item.id} data={item} />}
          keyExtractor={(item) => item.id.toString()}
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
