import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
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
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function MyStack() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Home") {
                return <FontAwesome name={"home"} size={size} color={color} />;
              } else if (route.name === "Favorites") {
                return <AntDesign name={"heart"} size={size} color={color} />;
              } else if (route.name === "Basket") {
                return (
                  <FontAwesome5
                    name={"shopping-bag"}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Profile") {
                return (
                  <MaterialIcons
                    name={"manage-accounts"}
                    size={size}
                    color={color}
                  />
                );
              }
              return <FontAwesome name="circle" size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Basket" component={Basket} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

const size = 37;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";
