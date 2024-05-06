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
import Login from "../Auth/Login";
import Register from "../Auth/Register";

const Stack = createNativeStackNavigator();

const MyStack = ({ productsData }) => {
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
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="Basket" component={Basket} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default MyStack;
