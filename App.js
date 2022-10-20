import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { Home } from "./Screens/Home";
import { Register } from "./Screens/Registration";
import { Login } from "./Screens/Login";

const MainStack = createStackNavigator();

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
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
      <StatusBar style="auto" backgroundColor="transparent" />
    </NavigationContainer>
  );
}
