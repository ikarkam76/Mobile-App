import React, { useState } from "react";
import {
    View,
    Button,
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


export const Home = ({navigation}) => {
    return (
      <View style={{ flex: 1}}>
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
          <Button
            title="Registration"
            onPress={() => navigation.navigate("Register")}
          ></Button>
        </ImageBackground>
      </View>
    );
}