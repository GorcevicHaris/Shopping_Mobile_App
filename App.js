import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  Button,
} from "react-native";
const logo = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        color={"midnightblue"}
        onPress={() => setIsModalVisible(true)}
      />
      <Modal visible={isModalVisible}>
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Button</Text>
          <Button
            title="Close"
            color={"midnightblue"}
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
