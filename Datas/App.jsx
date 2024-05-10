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
        <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: {},
            tabBarLabelStyle: { fontSize: 12 },
            tabBarActiveTintColor: "#E94B3CFF",
            tabBarInactiveTintColor: "red",
          })}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color="#E94B3CFF" size={size + 5} />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="heart" color="#E94B3CFF" size={size} />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
            name="FavoritesStack"
            component={FavoriteStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome
                  name="shopping-bag"
                  color="#E94B3CFF"
                  size={size}
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
            name="BasketStack"
            component={BasketStack}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="manage-accounts"
                  color="#E94B3CFF"
                  size={size + 10}
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
            name="ProfileStack"
            component={ProfileStack}
          />
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

const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  tabLabel: {
    fontSize: 12,
  },
});

const orange = "#E94B3CFF";
const siva = "#2D2926FF";
