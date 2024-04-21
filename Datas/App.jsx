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
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import Layout from "../Layout/Layout";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Layout} options={{ title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
