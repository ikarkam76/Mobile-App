import React, {useState} from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType} from 'expo-camera';

export const CreatePosts = () => {
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePhoto = async () => {
    try {
      const photo = await camera.takePictureAsync();
      alert(photo.uri);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
            <Text style={styles.snap}>SNAP</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 500,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  snapContainer: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#ff4500",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  snap: {
    color: "#fff",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 14,
  },
  button: {
    flex: 1,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
