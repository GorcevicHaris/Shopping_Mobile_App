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
  const { userName, setUserName, bio, setBio } = useContext(CustomContext);

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

  async function updateBio() {
    axios.put("http://localhost:4005/api/updateBio", {
      bio: bio,
      id: jwtDecode(tokenValues).userID,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const tokenValue = await token();
      setTokenValues(tokenValue);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <View style={styles.inContainer}>
        <TextInput
          onChangeText={(e) => setUserName(e)}
          value={userName}
          style={styles.input}
        />
        <Button title={"Done"} onPress={updateUserName} />
      </View>
      <Text>Bio</Text>
      <View style={styles.inContainer}>
        <TextInput
          onChangeText={(e) => setBio(e)}
          value={bio}
          style={styles.input}
        />
        <Button onPress={updateBio} title={"Done"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    paddingLeft: 35,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "white",
  },
  inContainer: {
    flexDirection: "row",
  },
});
