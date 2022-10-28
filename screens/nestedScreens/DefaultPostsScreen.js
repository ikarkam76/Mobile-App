import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export const DefaultPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <Image
              source={{ uri: item.photo }}
              style={{
                minWidth: 350,
                height: 200,
                marginBottom: 5,
                borderRadius: 10,
              }}
            />
            <View style={styles.titleContainer}>
              <View>
                <Text style={{ fontSize: 20, marginLeft: 10 }}>
                  {item.post}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  name="comments"
                  size={28}
                  color="#0000ff"
                  style={{ marginRight: 20 }}
                  onPress={() => navigation.navigate("Comments")}
                />
                <Entypo
                  name="location"
                  size={28}
                  color="#0000ff"
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate("Map")}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, indx) => indx.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#adff2f",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
