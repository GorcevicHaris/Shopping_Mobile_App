import React, { useContext, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ContextProvider, { CustomContext } from "../Context/ContextProvider";
import HomePage from "./HomePage";
import Favorites from "./Favorites/FavoritesPage";
import Basket from "./Basket/Basket";
import Profile from "./Profile/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { NavigationContainer } from "@react-navigation/native";
import EditProfile from "./Profile/EditProfile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setIsUserLogged(true);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <ContextProvider>
      <NavigationContainer>
        {isUserLogged ? (
          <TabNavigator setIsUserLogged={setIsUserLogged} />
        ) : (
          <AuthStack setIsUserLogged={setIsUserLogged} />
        )}
      </NavigationContainer>
    </ContextProvider>
  );
}

function AuthStack({ setIsUserLogged }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login">
        {() => <Login setIsUserLogged={setIsUserLogged} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

function TabNavigator({ setIsUserLogged }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: siva,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 0,
          borderTopColor: "blue",
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: orange,
        tabBarInactiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              style={{ position: "absolute", top: 15 }}
              name="home"
              color={orange}
              size={33}
            />
          ),
          headerShown: false,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="FavoritesStack"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              style={{ position: "absolute", top: 15 }}
              name="heart"
              color={orange}
              size={28}
            />
          ),
          headerShown: false,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="BasketStack"
        component={BasketStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              style={{ position: "absolute", top: 15 }}
              name="shopping-bag"
              color={orange}
              size={27}
            />
          ),
          headerShown: false,
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        children={() => <ProfileStack setIsUserLogged={setIsUserLogged} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              style={{ position: "absolute", top: 10 }}
              name="manage-accounts"
              color={orange}
              size={38}
            />
          ),
          headerShown: false,
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

function BasketStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      }}
      initialRouteName="Basket"
    >
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      }}
      initialRouteName="Favorites"
    >
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

function ProfileStack({ setIsUserLogged }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile">
        {(props) => <Profile setIsUserLogged={setIsUserLogged} />}
      </Stack.Screen>
      <Stack.Screen name="profileEdit" component={EditProfile} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: siva },
        headerTintColor: orange,
      }}
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
