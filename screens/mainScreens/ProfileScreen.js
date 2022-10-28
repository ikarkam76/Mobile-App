import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { authSingOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";



export const Profile = () => {
    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
      <Button title="LOGOUT" onPress={() => dispatch(authSingOutUser())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
