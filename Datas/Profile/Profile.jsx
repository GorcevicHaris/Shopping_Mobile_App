import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Profile({ route, navigation }) {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState("");
  const [tokenValue, setTokenValue] = useState("");
  const token = async () => {
    return await AsyncStorage.getItem("userToken");
  };
  useEffect(() => {
    const fetchToken = async () => {
      const tokenValue = await token();
      console.log(tokenValue, "kurac");
      setTokenValue(tokenValue);
    };
    fetchToken();
  }, [token]);

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("Login");
  };

  useEffect(() => {
    if (tokenValue) {
      setUserName(jwtDecode(tokenValue).user);
    }
  }, []);
  console.log(userName, "name");
  function goToRegister() {
    navigation.navigate("Register");
  }
  function goToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={style.container}>
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
