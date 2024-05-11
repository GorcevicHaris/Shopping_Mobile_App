import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import HomePage from "./HomePage";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ContextProvider from "../Context/ContextProvider";
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
            tabBarStyle: {
              height: 80,
              backgroundColor: siva,
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: "0",
              borderTopColor: "blue",
            },
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
                <FontAwesome
                  style={{ position: "absolute", top: 15 }}
                  name="home"
                  color="#E94B3CFF"
                  size={33}
                />
              ),
              headerShown: false,
              tabBarLabel: "",
            }}
          />

          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome
                  style={{ position: "absolute", top: 15 }}
                  name="heart"
                  color="#E94B3CFF"
                  size={28}
                />
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
                  style={{ position: "absolute", top: 15 }}
                  name="shopping-bag"
                  color="#E94B3CFF"
                  size={27}
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
                  style={{ position: "absolute", top: 10 }}
                  name="manage-accounts"
                  color="#E94B3CFF"
                  size={38}
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
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      })}
      initialRouteName="Basket"
    >
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      })}
      initialRouteName="Favorites"
    >
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      })}
      initialRouteName="Register"
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      })}
    >
      <Stack.Screen
        options={{ title: "H A R I N G A N" }}
        name="Home"
        component={HomePage}
      />
    </Stack.Navigator>
  );
}

const orange = "#E94B3CFF";
const siva = "#2D2926FF";
