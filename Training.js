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

// import logo from "./assets/adaptive-icon.png";
// export default function App() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   return (
//     <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
//       <Image style={{ width: 200, height: 300 }} source={logo}></Image>
//       <Button
//         title="Press"
//         color={"white"}
//         onPress={() => setIsModalVisible(true)}
//       />
//       <Modal
//         visible={isModalVisible}
//         onRequestClose={() => setIsModalVisible(false)}
//         animationType="slide"
//         presentationStyle="pageSheet"
//       >
//         <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
//           <Text style={{ color: "white" }}>Modal Button</Text>
//           <Button
//             title="Close"
//             color={"white"}
//             onPress={() => setIsModalVisible(false)}
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// }
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
