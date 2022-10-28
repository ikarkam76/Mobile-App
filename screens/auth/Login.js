import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { authSingInUser } from "../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export const Login = ({ navigation }) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const submitRegForm = () => {
    setIsInputFocus(false);
    Keyboard.dismiss();
    dispatch(authSingInUser(user));
    setUser(initialState);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/img/Photo_BG.png")}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" && "padding"}
            onFocus={() => setIsInputFocus(true)}
          >
            <View style={styles.formContainer}>
              <Text style={styles.pageHeader}>Увійти</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Адреса електонної пошти"
                placeholderTextColor="#BDBDBD"
                value={user.email}
                onChangeText={(val) =>
                  setUser((prev) => ({ ...prev, email: val }))
                }
              />
              <TextInput
                style={styles.textInput}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                value={user.password}
                secureTextEntry={true}
                onChangeText={(val) =>
                  setUser((prev) => ({ ...prev, password: val }))
                }
              />
              <TouchableOpacity style={styles.btnLogIn}>
                <Text
                  style={styles.btnTitleLogIn}
                  onPress={submitRegForm}
                >
                  Увійти
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.btnSingIn,
                  marginBottom: isInputFocus ? 5 : 45,
                }}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.btnTitle}>Нема аккаунта? Зареєструватись</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

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
    display: "flex",
    minWidth: 375,
    height: 549,
    marginBottom: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: `#ffffff`,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  pageHeader: {
    width: 184,
    height: 35,
    marginBottom: 32,
    textAlign: "center",
    fontFamily: "Roboto-500",
    fontSize: 30,
    color: "#212121",
  },
  textInput: {
    height: 50,
    minWidth: 343,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
  btnLogIn: {
    height: 51,
    minWidth: 343,
    marginBottom: 16,
    marginTop: 27,
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
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitleSingIn: {
    color: "#1B4371",
    fontSize: 16,
  },
});
