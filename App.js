import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Main } from "./components/Main";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main onLayout={onLayoutRootView} />
    </Provider>
  );
}



  // const loadFonts = async () => {
  //   try {
  //   } catch (error) {
  //     console.warn(error.message);
  //   }
  // };
  

  
//   if (!isFontsReady) {
//     return (
//       <AppLoading
//         startAsync={loadFonts}
//         onFinish={() => setIsFontsReady(true)}
//         onError={console.warn}
//       />
//     ); 
//   }
