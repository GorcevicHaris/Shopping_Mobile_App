import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"; // Add this import

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator;

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "home";
                return (
                  <FontAwesome name={iconName} size={size} color={color} />
                );
              } else if (route.name === "Favorites") {
                iconName = "heart";
                return <AntDesign name={iconName} size={size} color={color} />;
              } else if (route.name === "Basket") {
                iconName = "shopping-bag";
                return (
                  <FontAwesome5 name={iconName} size={size} color={color} />
                );
              } else if (route.name === "Profile") {
                iconName = "manage-accounts";
                return (
                  <MaterialIcons name={iconName} size={size} color={color} />
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
};

const size = 37;
const orange = "#E94B3CFF";
const siva = "#2D2926FF";

const styles = StyleSheet.create({
  footer: {
    height: 90,
    backgroundColor: siva,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {},
});

export default MyStack;
