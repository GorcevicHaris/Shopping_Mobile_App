import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Profile({ navigation }) {
  const [userName, setUserName] = useState("");
  const [auth, setAuth] = useState(false);
  function goToRegister() {
    navigation.navigate("Register");
  }
  function goToLogin() {
    navigation.navigate("Login");
  }

  useEffect(() => {
    axios.get("http://localhost:4005/Profile").then((response) => {
      if (response.data.Status === "Success") {
        setUserName(response.data[0].name);
        console.log("uspeh");
        setAuth(true);
      } else {
        setAuth(false);
        console.log("neuspeh");
      }
    });
  }, []);

  console.log(userName, "userName");
  return (
    <View style={style.container}>
      {auth && <Text>{userName}</Text>}
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
