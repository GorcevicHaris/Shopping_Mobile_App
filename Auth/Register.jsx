import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function Register() {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(values);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setvalues("name", text)}
        style={styles.input}
        placeholder="Ime"
        value={values.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => setvalues("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={(text) => setvalues("password", text)}
        style={styles.input}
        placeholder="Lozinka"
        value={values.password}
        secureTextEntry={true}
      />
      <Button title="Registruj se" onPress={handleRegister} />
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
