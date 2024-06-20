import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { CustomContext } from "../../Context/ContextProvider";

function Profile({ navigation, setIsUserLogged }) {
  const [tokenValue, setTokenValue] = useState("");
  const { userName, setUserName } = useContext(CustomContext);
  const { setTotalPrice } = useContext(CustomContext);

  const token = async () => {
    return await AsyncStorage.getItem("userToken");
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    setIsUserLogged(false);
    setTotalPrice(0);
  };

  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const tokenValues = await token();
        setTokenValue(tokenValues);
      }
      fetchData();
    }, [])
  );

  console.log(userName);

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
      <TouchableOpacity onPress={handleEdit} style={style.editButton}>
        <Text>Edit</Text>
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
  editButton: {
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
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
