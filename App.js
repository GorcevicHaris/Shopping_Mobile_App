import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Button,
  StatusBar,
  ActivityIndicator,
} from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"small"} />
      <ActivityIndicator color={"red"} />
    </View>
  );
}
