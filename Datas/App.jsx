import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import HomePage from "./HomePage";
import Layout from "../Layout/Layout";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ContextProvider from "../Context/ContextProvider";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function TabNavigator() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="FavoritesStack" component={FavoriteStack} />
          <Tab.Screen name="BasketStack" component={BasketStack} />
          <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

function BasketStack() {
  return (
    <Stack.Navigator initialRouteName="Basket">
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}
