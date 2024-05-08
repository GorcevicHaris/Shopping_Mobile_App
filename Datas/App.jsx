import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import Layout from "../Layout/Layout";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ContextProvider from "../Context/ContextProvider";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          screenOptions={{
            tabBarStyle: styles.tabBar,
          }}
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

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "red",
  },
});

export default MyStack;
