import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomePage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  function getData() {}
  return (
    <View style={styles.container1}>
      <Button
        onPress={() => navigation.navigate("About")}
        title="Go to About"
      />
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});
