import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
function Login({ navigation }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  console.log(values);

  function handleSubmit() {
    axios
      .post(`http://192.168.0.103:4005/Login`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigation.navigate("Profile");
          console.log(res.data.Status);
        } else {
          console.log(res.data.Message);
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
