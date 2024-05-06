import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(values);
  const navigate = useNavigation();
  useEffect(() => {
    function getData() {
      axios;
    }
  }, []);

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
        secureTextEntry={true}
      />
      <Button title="Registruj se" />
      <Button title="Idi login" onPress={() => navigate.navigate("Login")} />
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
