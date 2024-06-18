import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "react-native-elements";
import { useContext } from "react";
import { CustomContext } from "../../Context/ContextProvider";

export default function EditProfile({ navigation }) {
  const [tokenValues, setTokenValues] = useState();
  const { userName, setUserName } = useContext(CustomContext);

  async function token() {
    return await AsyncStorage.getItem("userToken");
  }

  async function updateUserName() {
    await axios.put("http://localhost:4005/api/updatUserName", {
      name: userName,
      id: jwtDecode(tokenValues).userID,
    });
    navigation.navigate("Profile");
  }
  console.log(userName, "ime");
  useEffect(() => {
    async function fetchData() {
      const tokenValue = await token();
      setTokenValues(tokenValue);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) => setUserName(e)}
        value={userName}
        style={styles.input}
      />
      <Button title={"update"} onPress={updateUserName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "white",
  },
});
