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
  // const [color,setColor] = useState(styles.container2)

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
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View><View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View><View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
      <View style={styles.container2}></View>
    </ScrollView>
  );
}


const windowWidth =  Dimensions.get('window').width
const windowHeight =  Dimensions.get('window').height


const styles = StyleSheet.create({
  container: {
    height:"auto",
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'flex-start',
    backgroundColor: 'orange',
    alignItems:'flex-center',
    justifyContent:'center',
    padding:50
  },
  container2: {
    height:50,
    width:"100%",
    backgroundColor: 'red',
    margin: 10,
  },
  container3: {
    backgroundColor: 'blue',
    margin: 10,
  },
});
