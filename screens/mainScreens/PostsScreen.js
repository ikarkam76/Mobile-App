import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Posts = () => {
  return (
    <View style={styles.container}>
      <Text>Posts page</Text>
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
