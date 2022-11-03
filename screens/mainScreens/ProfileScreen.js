import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { authSingOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";



export const Profile = () => {
    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/img/pexels-rovenimagescom-949587.jpg")}
      >
        <Text>Profile page</Text>
        <Button title="LOGOUT" onPress={() => dispatch(authSingOutUser())} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
