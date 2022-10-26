import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";


const initialState = {
  login: "",
  email: "",
  password: "",
};

export const Register = ({navigation}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [user, setUser] = useState(initialState);

  const submitRegForm = () => {
    setIsInputFocus(false);
    Keyboard.dismiss();
    setUser(initialState);
    };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/img/Photo_BG.png")}
      >
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
          setIsInputFocus(false);
        }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" && "padding"}
            onFocus={() => setIsInputFocus(true)}
          >
            <View style={styles.formContainer}>
              <View style={styles.fotoContainer}>
                <TouchableOpacity style={styles.fotoContainerBtn}>
                  <Image source={require("../../assets/img/add.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.pageHeader}>Реєстрація</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Логін"
                placeholderTextColor="#BDBDBD"
                value={user.login}
                onChangeText={(val) =>
                  setUser((prev) => ({ ...prev, login: val }))
                }
              />
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
                <Text style={styles.btnTitleLogIn} onPress={submitRegForm}>
                  Зареєструватися
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.btnSingIn, marginBottom: isInputFocus ? -142 : 45 }}
                onPress={()=>navigation.navigate('Login')}
              >
                <Text style={styles.btnTitle}>Вже маєте аккаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
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
    display: "flex",
    minWidth: 375,
    height: 549,
    justifyContent: "flex-end",
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
    marginBottom: 32,
  },
  fotoContainerBtn: {
    marginTop: 81,
    marginLeft: 107,
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
