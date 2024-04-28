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
// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Modal,
//   Button,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
      <Image style={{ width: 200, height: 300 }} source={logo}></Image>
      <Button
        title="Press"
        color={"white"}
        onPress={() => setIsModalVisible(true)}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
          <Text style={{ color: "white" }}>Modal Button</Text>
          <Button
            title="Close"
            color={"white"}
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
//===========================================================================================
// //StatusBar sluzi za podesavanje gornjeg dela telefona tjst internta vreme itd...
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
//       <StatusBar
//         backgroundColor={"lightgreen"}
//         barStyle={"light-content"}
//         hidden
//       />
//     </View>
//   );
// }
//===========================================================================================
// //ActivityIndicator Loeader
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
//       <ActivityIndicator />
//       <ActivityIndicator size={"large"} />
//       <ActivityIndicator size={"small"} />
//       <ActivityIndicator color={"red"} animating={false} />
//     </View>
//   );
// }
//===========================================================================================
// //Alert radjen sa onPress u Alert.alert ima 3 parametra svi imaju svoju ulogu
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
//       <Button
//         title="Alert1"
//         onPress={() => Alert.alert("Invalid Data", "u will be warned again")}
//       />
//       <Button
//         title="Alert2"
//         onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}
//       />
//       <Button
//         title="Alert3"
//         onPress={() =>
//           Alert.alert("DOB incorrect", "DOB incorrect", [
//             {
//               text: "Cancel",
//               onPress: () => console.log("Cancel pressed"),
//             },
//             {
//               text: "OK",
//               onPress: () => console.log("OK pressed"),
//             },
//           ])
//         }
//       />
//     </View>
//   );
// }
//========================================================================
//ako zelimo da mozemo telefono  okretati to jest imai orjentaciju horizontalno i vertikalno
// idemo u app.json i stavljamo "orientation": "default",
