import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePosts page</Text>
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
