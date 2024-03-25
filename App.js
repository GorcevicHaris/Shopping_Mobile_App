import { View, Text } from "react-native";
const logo = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "green",
        }}
      >
        <Text style={{ color: "red" }}>
          sta ima <Text style={{ color: "blue" }}>brate</Text>{" "}
        </Text>
      </View>
    </View>
  );
}
