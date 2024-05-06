import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function Footer() {
  const navigate = useNavigation();
  return (
    <View style={styles.footer}>
      <FontAwesome
        onPress={() => navigate.navigate("Home")}
        name="home"
        size={size}
        color="#E94B3CFF"
      />
      <AntDesign
        onPress={() => navigate.navigate("Favorites")}
        name="heart"
        size={29}
        color="#E94B3CFF"
      />
      <FontAwesome5
        onPress={() => navigate.navigate("Basket")}
        name="shopping-bag"
        size={29}
        color="#E94B3CFF"
      />
      <FontAwesome name="search" size={29} color="#E94B3CFF" />
      <MaterialIcons
        onPress={() => navigate.navigate("Profile")}
        name="manage-accounts"
        size={size}
        color="#E94B3CFF"
      />
    </View>
  );
}

const size = 37;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";

const styles = StyleSheet.create({
  footer: {
    height: 90,
    backgroundColor: siva,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {},
});

export default Footer;
