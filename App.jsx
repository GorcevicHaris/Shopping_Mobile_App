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
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Greet from "./components/Greet";
import logo from "./assets/adaptive-icon.png";
import React, { useState } from "react";

export default function App() {
  const [color,setColor] = useState(styles.container2)
  function handleColor(){
    if(color == styles.container2){
      setColor(styles.container3)
    }else{
      setColor(styles.container2)
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <TouchableOpacity style={color} onPress={handleColor}></TouchableOpacity> */}
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={color}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
    </ScrollView>
  );
}


const windowWidth =  Dimensions.get('window').width
const windowHeight =  Dimensions.get('window').height


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'flex-start',
    backgroundColor: 'orange',
    alignItems:'flex-center',
    justifyContent:'center',
    paddingTop:50,
    gap:100,
  },
  container2: {
    height: 100,
    backgroundColor: 'red',
    width: windowWidth >200 ? "95%" : "80%",
    margin: 10,
  },
  container3: {
    height: 100,
    width: windowWidth > 600 ? "100%" : "80%",
    backgroundColor: 'blue',
    margin: 10,
  },
});
