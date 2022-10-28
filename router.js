import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import { Register } from "./screens/auth/Registration";
import { Login } from "./screens/auth/Login";
import { Posts } from "./screens/mainScreens/PostsScreen";
import { CreatePosts } from "./screens/mainScreens/CreatePostsScreen";
import { Profile } from "./screens/mainScreens/ProfileScreen";
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Register">
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={styles.tabBar}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          headerShown: false,
        }}
        name="Default"
        component={Posts}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.btnCreate}>
              <Feather name="plus" size={24} color="white" />
            </View>
          ),
        }}
        name="CreatePosts"
        component={CreatePosts}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    tabBarShowLabel: false,
    headerTitleAlign: 'center',
  },
  btnCreate: {
    height: 40,
    width: 70,
    marginBottom: 16,
    marginTop: 27,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnCreateTitle: {
    color: "white",
    fontSize: 24,
  },
});