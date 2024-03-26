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
  StyleSheet
} from "react-native";
import Greet from "./components/Greet";
import logo from "./assets/adaptive-icon.png";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={style.container}>
      <Text>asda</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container:{
    backgroundColor: "red", padding: 60, height: "100%" 
  }
})