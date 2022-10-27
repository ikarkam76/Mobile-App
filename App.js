import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Main } from "./components/Main";

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
    <Provider store={store}>
      <Main/>
    </Provider>
    
  );
}
