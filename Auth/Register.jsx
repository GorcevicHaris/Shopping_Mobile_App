import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
function Register({ navigation }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(values);
  function handleSubmit() {
    axios
      .post(`http://192.168.0.107:4005/Register`, values)
      .then((res) => {
        console.log(res, "Prošlo");
        navigation.navigate("Login");
      })
      .catch((err) => console.log(err, "Greska register"));
  }
  function goLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setValues({ ...values, name: text })}
        style={styles.input}
        placeholder="Ime"
        value={values.name}
      />
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
      />
      <Button title="Registruj se" onPress={handleSubmit} />
      <Button title="Idi login" onPress={goLogin} />
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

export default Register;
