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
  Alert,
} from "react-native";
import Greet from "./components/Greet";
import logo from "./assets/adaptive-icon.png";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "blue", padding: 60, height: "100%" }}>
      <Greet name="Bruce Wayne" />
      <Greet name="Bruce cler" />
    </View>
  );
}
