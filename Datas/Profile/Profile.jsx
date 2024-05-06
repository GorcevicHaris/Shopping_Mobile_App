import React from "react";
import { View, Text } from "react-native";

function Profile({ navigate }) {
  function goToRegister() {
    navigate.navigate("Register");
  }
  return (
    <View>
      <Text children="children" />
    </View>
  );
}

export default Profile;
