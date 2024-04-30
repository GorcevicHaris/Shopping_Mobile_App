import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import Layout from "../Layout/Layout";
import About from "../About";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
import Header from "../Layout/Header";
import ContextProvider from "../Context/ContextProvider";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {() => (
              <Layout>
                <HomePage />
              </Layout>
            )}
          </Stack.Screen>
          <Stack.Screen name="favorites" component={Favorites} />
          <Stack.Screen name="basket" component={Basket} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default MyStack;
