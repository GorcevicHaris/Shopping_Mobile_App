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
import About from "../About";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Layout}
        />
        <Stack.Screen name="favorites" component={Favorites} />
        <Stack.Screen name="basket" component={Basket} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
