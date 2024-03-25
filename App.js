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
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
      <Button
        title="Alert1"
        onPress={() => Alert.alert("Invalid Data", "u will be warned again")}
      />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("DOB incorrect", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK pressed"),
            },
          ])
        }
      />
    </View>
  );
}
