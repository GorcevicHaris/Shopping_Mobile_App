import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import DataFavorites from "../../components/DataFavorites";
import Data from "../../components/Data";
import { CustomContext } from "../../Context/ContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Favorites() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  console.log("muderi", orders, "orderi");

  // const { dataFavorite, setDataFavorite } = useContext(CustomContext);
  // console.log(dataFavorite, "datafavorites");
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
