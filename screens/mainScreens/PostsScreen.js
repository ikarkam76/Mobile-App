import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPosts } from "../nestedScreens/DefaultPostsScreen";
import { Comments } from "../nestedScreens/CommentsScreen";
import { Map } from '../nestedScreens/MapScreen';

const NestedScreen = createStackNavigator();

export const Posts = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen name="Posts" component={DefaultPosts} />
      <NestedScreen.Screen name="Comments" component={Comments} />
      <NestedScreen.Screen name="Map" component={Map} />
    </NestedScreen.Navigator>
  );
}
