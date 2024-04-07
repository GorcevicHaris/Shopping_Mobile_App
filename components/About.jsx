import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function About({ navigation }) {
  const [isloading, setIsLoading] = useState();

  function onLoader() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }
  return (
    <View style={style.container1}>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <Text onPress={onLoader}>Go to Home</Text>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container1: {
    height: "100%",
    width: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    color: "red",
  },
});
