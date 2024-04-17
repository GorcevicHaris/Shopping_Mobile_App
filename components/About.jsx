import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function About({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsLoader } = route.params;

  function onLoader() {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
  }

  return (
    <View style={styles.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.box}>
          <Text styl={styles.text} onPress={onLoader}>
            Go to Home
          </Text>
        </View>
      )}
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: windowWidth < 300 ? "10%" : "90%",
    height: windowHeight < 300 ? "10%" : "90%",
    backgroundColor: "blue",
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 25,
  },
});
