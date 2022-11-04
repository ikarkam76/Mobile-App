import React, { useState, useEffect } from "react";
import { firebase } from "../../fireBase/config";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  Keyboard,
} from "react-native";


export const Comments = ({ route }) => {
  const { id, photoToSend, comment } = route.params.item;
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { login } = useSelector((state) => state.auth);

  useEffect(() =>{ getAllComments();},[])

  const getAllComments = async () => {
    await firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .collection("comments")
      .onSnapshot((data) =>
         setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  }

  const createPost = async () => {
    if (newComment === '') {
      return Alert.alert('Так додай же якусь розумну фразу...')
    }
    await firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .collection('comments')
      .add({ newComment, login });
    setIsInputFocus(false);
    Keyboard.dismiss();
    setNewComment('');
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: photoToSend }}
          style={{
            minWidth: 350,
            height: 200,
            marginBottom: 5,
            borderRadius: 10,
          }}
        />
        <Text style={{ marginTop: 5, fontSize: 18 }}>"{comment}"</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Додайте коментар..."
          placeholderTextColor="#BDBDBD"
          value={newComment}
          onChangeText={(val) => setNewComment(val)}
        />
        <Ionicons
          name="save"
          size={30}
          color="#0000ff"
          style={{ position: "absolute", right: 5, top: 8 }}
          onPress={createPost}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={{ marginLeft: 5, fontSize: 16 }}>{item.login}:</Text>
              <Text style={{ fontStyle: "italic" }}> -{item.newComment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 50,
    minWidth: 343,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
  commentContainer: {
    backgroundColor: "#faf0e6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    padding: 2,
    marginTop: 5,
  },
});
