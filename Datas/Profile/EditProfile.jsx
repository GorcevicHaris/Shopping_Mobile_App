import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "react-native-elements";

export default function EditProfile() {
  const [tokenValues, setTokenValues] = useState();
  const [name, setName] = useState();

  async function token() {
    return await AsyncStorage.getItem("userToken");
  }

  async function updateUserName() {
    await axios.put("http://localhost:4005/api/updatUserName", {
      name: name,
      id: jwtDecode(tokenValues).userID,
    });
  }
  console.log(name);
  useEffect(() => {
    async function fetchData() {
      const tokenValue = await token();
      setTokenValues(tokenValue);
      if (tokenValue) {
        setName(jwtDecode(tokenValue).user);
      } else {
        console.log("ne postoji");
      }
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) => setName(e)}
        value={name}
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
