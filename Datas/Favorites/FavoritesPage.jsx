import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import DataFavorites from "../../components/DataFavorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function Favorites() {
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      axios
        .get("http://localhost:4005/api/fetchFavorites", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setOrders(res.data);
          console.log(res.data, "favoritesData");
        })
        .catch((err) => console.log(err));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
      return () => {};
    }, [orders.length])
  );

  console.log("muderi", orders, "orderi");

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <DataFavorites key={item.id} data={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 30 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
