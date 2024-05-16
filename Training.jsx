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
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Text,
//   Dimensions,
//   StatusBar,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import Data from "../components/Data";
// import products from "../Products/Produtcs.json";

// function HomePage() {
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   function onFilteredProducts({ nativeEvent }) {
//     if (nativeEvent.key === "Backspace") {
//       const modifiedSearch = search.slice(0, -1);
//       setFilteredProducts(
//         products.filter((data) =>
//           data.title.toLowerCase().includes(modifiedSearch.toLowerCase())
//         )
//       );
//     }
//   }
//   return (
//     <View style={styles.container1}>
//       <StatusBar />
//       <View style={{ flexDirection: "column" }}>
//         <View style={{ flexDirection: "row" }}>
//           <TextInput
//             value={search}
//             onKeyPress={onFilteredProducts}
//             onChangeText={(e) => setSearch(e.toLowerCase())}
//             style={styles.input}
//             placeholder="Search"
//             placeholderTextColor="white"
//           />
//           <Feather style={styles.icon} name="search" size={24} />
//         </View>
//         <FlatList
//           numColumns={windowWidth > 700 ? 2 : 1}
//           columnWrapperStyle={windowWidth > 700 ? { gap: 10 } : null}
//           data={filteredProducts}
//           renderItem={({ item }) => <Data key={item.id} data={item} />}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </View>
//     </View>
//   );
// }
// const windowWidth = Dimensions.get("window").width;

// export default HomePage;
// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     padding: 20,
//     position: "relative",
//     backgroundColor: "blue",
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: "gray",
//     fontSize: 16,
//     padding: 7,
//     color: "white",
//   },
//   icon: {
//     position: "absolute",
//     right: 12,
//     top: 10,
//     color: "#E94B3CFF",
//   },
// });
//=========================================================================
// 1.Fokus: Kada se komponenta pojavi na ekranu, kod unutar useFocusEffect se pokreće odmah.
// 2.Defokus: Kada se komponenta ukloni sa ekrana ili pređe u pozadinski režim, funkcija vraćanja
//  (clean-up function), koja se definira unutar useFocusEffect, se pokreće. Ovo je korisno za prekidanje
//  API zahteva, čišćenje tajmera ili ukidanje pretplate na događaje.
// /////////////////////////////////
// Na primer, ako se useFocusEffect koristi bez zavisnosti (dependency array ),
//  izvršavaće se svaki put kada se komponenta fokusira ili defokusira. Ukoliko
//   dodate niz zavisnosti, onda će se pratiti promene onih specifičnih propertija
//    ili stanja i tom prilikom će se ponovno izvršavati logika unutar useFocusEffect.
