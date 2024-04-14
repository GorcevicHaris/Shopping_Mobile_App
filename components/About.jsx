import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function About({ data, navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  function onLoader() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container1}>
          <Text onPress={onLoader}>Go to Home</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: "auto",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
