import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../Datas/HomePage";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <HomePage />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
