import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Haringan-Shop</Text>
  </View>
);
const gray = "#2D2926FF";
const orange = "#E94B3CFF";
const styles = StyleSheet.create({
  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: gray,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 5,
    fontWeight: "900",
    color: orange,
  },
});

export default Header;
