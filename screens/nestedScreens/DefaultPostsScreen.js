import React, { useState, useEffect } from "react";
import { firebase } from "../../fireBase/config";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  ImageBackground
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export const DefaultPosts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/img/pexels-rovenimagescom-949587.jpg")}
      >
        <SafeAreaView >
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <View style={styles.photoContainer}>
                <Image
                  source={{ uri: item.photoToSend }}
                  style={{
                    minWidth: 350,
                    height: 200,
                    marginBottom: 5,
                    borderRadius: 10,
                  }}
                />
                <View style={styles.titleContainer}>
                  <View>
                    <Text style={{ fontSize: 18, marginLeft: 10 }}>
                      {item.comment}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      name="comments"
                      size={28}
                      color="#0000ff"
                      style={{ marginRight: 20 }}
                      onPress={() =>
                        navigation.navigate("Comments", { item: item })
                      }
                    />
                    <Entypo
                      name="location"
                      size={28}
                      color="#0000ff"
                      style={{ marginRight: 10 }}
                      onPress={() =>
                        navigation.navigate("Map", { location: item.location })
                      }
                    />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, indx) => indx.toString()}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  photoContainer: {
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#adff2f",
    backgroundColor: "#faf0e6",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
