import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { Register } from "./Screens/Auth/Registration";
import { Login } from "./Screens/Auth/Login";

const AuthStack = createStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};


export default function App()  {
  const [isFontsReady, setIsFontsReady] = useState(false);

  if (!isFontsReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsFontsReady(true)}
        onError={console.warn}
      />
    ); 
  }
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Register">
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
      <StatusBar style="auto" backgroundColor="transparent" />
    </NavigationContainer>
  );
}
