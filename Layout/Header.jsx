import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.headerText}>Haringan-Shop</Text>
      </TouchableOpacity>
    </View>
  );
}

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
