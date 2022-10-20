import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};


export default function App()  {
  const [isFontsReady, setIsFontsReady] = useState(false)
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
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/img/Photo_BG.png")}
      >
        <View style={styles.formContainer}>
          <View style={styles.fotoContainer}></View>
          <Text style={styles.pageHeader}>Реєстрація</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Адреса електонної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.btnLogIn}>
            <Text style={styles.btnTitleLogIn}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSingIn}>
            <Text style={styles.btnTitle}>Вже маєте аккаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" backgroundColor="transparent" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    minWidth: 375,
    height: 549,
    alignItems: "center",
    backgroundColor: `#ffffff`,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  fotoContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginTop: -60,
  },
  pageHeader: {
    width: 184,
    height: 35,
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
    fontFamily: "Roboto-500",
    fontSize: 30,
    color: "#212121",
  },
  textInput: {
    height: 50,
    minWidth: 343,
    padding: 16,
    marginTop: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
  btnLogIn: {
    height: 51,
    minWidth: 343,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnTitleLogIn: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto-400",
  },
  btnSingIn: {
    height: 51,
    minWidth: 343,
    padding: 10,
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitleSingIn: {
    color: "#1B4371",
    fontSize: 16,
  },
});
