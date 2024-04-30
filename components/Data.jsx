import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Data({ data }) {
  const orange = "#E94B3CFF";
  const siva = "#2D2926FF";
  const [borderColor, setBorderColor] = useState(siva);

  const styles = StyleSheet.create({
    container: {
      minHeight: 10,
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      borderRadius: 15,
      gap: 20,
      padding: 20,
      borderBottomWidth: 10,
      borderBottomColor: siva,
      borderRightWidth: 10,
      borderRightColor: siva,
    },
    image: {
      objectFit: "contain",
      borderRadius: 25,
      height: 450,
      width: 350,
      objectFit: "cover",
      alignSelf: "center",
    },
    buyinfo: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: siva,
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.imageURL }} />
      <View style={styles.buyinfo}>
        <Text>300.00 RSD</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
