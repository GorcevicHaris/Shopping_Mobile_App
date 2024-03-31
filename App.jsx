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
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./components/HomePage"
import About from "./components/About"
const Stack = createNativeStackNavigator();

export default function App() {
  // const [color,setColor] = useState(styles.container2)

  // function handleColor(){
  //   if(color == styles.container2){
  //     setColor(styles.container3)
  //   }else{
  //     setColor(styles.container2)
  //   }
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



