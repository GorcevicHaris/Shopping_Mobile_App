import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { CustomContext } from "../../Context/ContextProvider";
import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
function Profile({ route, navigation }) {
  const [userName, setUserName] = useState("");
  const [tokenValue, setTokenValue] = useState("");
  const { setTotalPrice } = useContext(CustomContext);
  const token = async () => {
    return await AsyncStorage.getItem("userToken");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("Login");
    setTotalPrice(0);
  };

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const tokenValues = await token();
        setTokenValue(tokenValues);
        if (tokenValues) {
          setUserName(jwtDecode(tokenValues).user);
        } else {
          console.log("first");
        }
      }
      fetchData();
    }, [])
  );

  function goToRegister() {
    navigation.navigate("Register");
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  function handleEdit() {
    navigation.navigate("profileEdit");
  }

  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={handleEdit}
        style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit </Text>
      </TouchableOpacity>
      <Text>{userName}</Text>
      <TouchableOpacity onPress={goToRegister} style={style.button}>
        <Text>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin} style={style.button}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout} style={style.logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "orange",
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  logout: {
    backgroundColor: "red",
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});
export default Profile;
