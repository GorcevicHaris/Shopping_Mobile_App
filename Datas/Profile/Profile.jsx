import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

function Profile({ route, navigation }) {
  const [auth, setAuth] = useState(false);
  const { userName } = route.params;
  function goToRegister() {
    navigation.navigate("Register");
  }
  function goToLogin() {
    navigation.navigate("Login");
  }
  console.log(userName);
  console.log(userName, "userName");
  return (
    <View style={style.container}>
      {<Text>{userName}</Text>}
      <TouchableOpacity onPress={goToRegister} style={style.button}>
        <Text>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin} style={style.button}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.logout}>
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
