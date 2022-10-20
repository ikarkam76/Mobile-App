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


export const Login = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 180,
          }}
          source={require("../assets/img/Photo_BG.png")}
        >
          <Text style={{ fontSize: 30, color: "#fff" }}>Login screen</Text>
        </ImageBackground>
      </View>
    );
}