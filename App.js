import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};
  


export default function App()  {
  const [isFontsReady, setIsFontsReady] = useState(false);
  const routing = useRoute(1);
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
    <Provider store={store}>
      <NavigationContainer>
      {routing}
      <StatusBar style="auto" backgroundColor="transparent" />
      </NavigationContainer>
    </Provider>
    
  );
}
