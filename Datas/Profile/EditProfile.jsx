import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "react-native-elements";
import { useContext } from "react";
import { CustomContext } from "../../Context/ContextProvider";
import { Dropdown } from "react-native-element-dropdown";

export default function EditProfile({ navigation }) {
  const [tokenValues, setTokenValues] = useState();
  const { userName, setUserName, bio, setBio, gender, setGender } =
    useContext(CustomContext);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "Male", value: "male" },
    { label: "Famale", value: "famale" },
  ];

  async function token() {
    return await AsyncStorage.getItem("userToken");
  }
  async function updateInfo() {
    await axios.put("http://localhost:4005/api/updateUserName", {
      name: userName,
      id: jwtDecode(tokenValues).userID,
    });

    await axios.put("http://localhost:4005/api/updateBio", {
      bio: bio,
      id: jwtDecode(tokenValues).userID,
    });

    await axios.put("http://localhost:4005/api/updateGender", {
      gender: gender,
      id: jwtDecode(tokenValues).userID,
    });

    navigation.navigate("Profile");
  }

  useEffect(() => {
    async function fetchData() {
      const tokenValue = await token();
      setTokenValues(tokenValue);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <View style={styles.inContainer}>
        <TextInput
          onChangeText={(e) => setUserName(e)}
          value={userName}
          style={styles.input}
        />
      </View>
      <Text>Bio</Text>
      <View style={styles.inContainer}>
        <TextInput
          onChangeText={(e) => setBio(e)}
          value={bio}
          style={styles.input}
        />
        <Button onPress={updateInfo} title={"Done"} />
      </View>
      <Text>Gender</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={gender}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setGender(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    paddingLeft: 35,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "white",
  },
  inContainer: {
    flexDirection: "row",
  },
  dropdown: {
    height: 40,
    width: 300,
    backgroundColor: "white",
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
