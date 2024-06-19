import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CustomContext } from "../Context/ContextProvider";
import { jwtDecode } from "jwt-decode";

function Login({ navigation, setIsUserLogged }) {
  const { userName, setUserName } = useContext(CustomContext);
  const { setSendDataFunction } = useContext(CustomContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    axios
      .post(`http://localhost:4005/Login`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          AsyncStorage.setItem("userToken", res.data.token);
          setSendDataFunction([]);
          setUserName(jwtDecode(res.data.token).user);
          setIsUserLogged(true);
        } else {
          console.log(res.data.Message, "greska login");
        }
      })
      .catch((err) => console.log(err, "Greska"));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => setValues({ ...values, email: text })}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(text) => setValues({ ...values, password: text })}
        style={styles.input}
        placeholder="Lozinka"
        value={values.password}
        secureTextEntry={true}
      />
      <Button
        title="Registruj se"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
