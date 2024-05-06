import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Profile({ navigation }) {
  function goToRegister() {
    navigation.navigate("Register");
  }
  function goToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={goToRegister} style={style.button}>
        <Text>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin} style={style.button}>
        <Text>Go to Login</Text>
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
});
export default Profile;
