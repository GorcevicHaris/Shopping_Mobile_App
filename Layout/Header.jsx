import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Haringan-Shop</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
