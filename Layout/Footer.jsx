import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IoHome } from "react-icons/io5";

const Footer = () => (
  <View style={styles.footer}>
    <IoHome />
  </View>
);

const styles = StyleSheet.create({
  footer: {
    height: 100,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Footer;
