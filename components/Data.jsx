import React from "react";
import { View, Text } from "react-native";

function Data({ data }) {
  return (
    <View>
      <Text>title :{data.title}</Text>
      <Text>description : {data.description}</Text>
      <Text>price : {data.price}</Text>
    </View>
  );
}

export default Data;
