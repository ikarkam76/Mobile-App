import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Camera,
  CameraType,
  getCameraPermissionsAsync,
  getMicrophonePermissionsAsync,
  requestCameraPermissionsAsync,
  requestMicrophonePermissionsAsync
} from 'expo-camera';
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

import { uploadPostToServer } from "../../redux/files/dataBaseOperations";

export const CreatePosts = ({navigation}) => {
  const [type, setType] = useState(CameraType.back);
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState('');
  const [comment, setComment] = useState("");
  const [flash, setFlash] = useState('off');
  const [showDescriptionPhoto, setShowDescriptionPhoto] = useState(false);
  const cameraRef = useRef();
    const { userId, login } = useSelector((state) => state.auth);


  useEffect(() => {
    (async () => {
      await requestPermissions();
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
        let location = await Location.getCurrentPositionAsync({});
      await setLocation(location);
      })();
  }, [])

  const requestPermissions = async () => {
    await requestCameraPermissionsAsync();
    await requestMicrophonePermissionsAsync();
  }

  const getPermissions = async() => {
    const cameraPermission = await getCameraPermissionsAsync();
    const microfonePermission = await getMicrophonePermissionsAsync();
    return cameraPermission.granted && microfonePermission.granted;
  }

  if (!getPermissions()) {
    return Alert.alert('Permission required!', 'You need to provide the permission to access the camera', [{ text: 'Got it!' }]);
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const toggleFlashMode = () => {
    setFlash(flash === 'off' ? 'on' : 'off');
  }

  const takePhoto = async () => {
    try {
      const snapshot = await cameraRef.current.takePictureAsync();
      setPhoto(snapshot.uri);
    } catch (error) {
      console.log(error.message);
    }
  }

  const sendPhoto = async () => {
    try {
      await navigation.navigate("Posts", { photo, comment });
      await setShowDescriptionPhoto(false);
      uploadPostToServer(userId, login, photo, comment, location);
      setPhoto("");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.cameraContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <Camera
            style={styles.camera}
            ref={cameraRef}
            type={type}
            flashMode={flash}
            onCameraReady={() => {
              requestCameraPermissionsAsync();
            }}
          >
            {photo && (
              <View style={styles.previewPhoto}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 450, borderRadius: 10 }}
                />
                <View style={styles.controlsContainer}>
                  <TouchableOpacity
                    style={styles.snapContainer}
                    onPress={() => setShowDescriptionPhoto(true)}
                  >
                    <MaterialIcons name="save-alt" size={40} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.snapContainer}
                    onPress={() => {
                      setPhoto("");
                      setShowDescriptionPhoto(false);
                    }}
                  >
                    <MaterialIcons name="delete" size={40} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {showDescriptionPhoto && (
              <View>
                <TextInput
                  style={styles.textInput}
                  placeholder="?????????????? ???????? ????????..."
                  placeholderTextColor="#BDBDBD"
                  onChangeText={(val) => setComment(val)}
                />
                <Ionicons
                  name="save"
                  size={30}
                  color="#0000ff"
                  style={{ position: "absolute", right: 5, top: 8 }}
                  onPress={sendPhoto}
                />
              </View>
            )}

            <View style={styles.controlsContainer}>
              <Feather
                name="refresh-ccw"
                size={35}
                color="#adff2f"
                onPress={toggleCameraType}
              />
              <TouchableOpacity
                onPress={takePhoto}
                style={styles.snapContainer}
              >
                <MaterialIcons name="photo-camera" size={30} color="#fff" />
              </TouchableOpacity>
              <Ionicons
                name={flash === "on" ? "flash" : "flash-off"}
                size={35}
                color="#adff2f"
                onPress={toggleFlashMode}
              />
            </View>
          </Camera>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camera: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  snapContainer: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderColor: "#adff2f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  snap: {
    color: "#fff",
  },
  controlsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  previewPhoto: {
    position: "absolute",
    top: 15,
    left: 5,
    right: 5,
    borderWidth: 1,
    borderColor: "#adff2f",
    borderRadius: 10,
  },
  textInput: {
    height: 50,
    minWidth: 343,
    padding: 16,
    marginBottom: 100,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
  },
});
