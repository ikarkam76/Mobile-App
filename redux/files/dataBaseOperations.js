import { firebase } from "../../fireBase/config";

const uploadPhoto = async (photo) => {
  const fileName = photo.substring(photo.lastIndexOf("/") + 1);
  const response = await fetch(photo);
  const file = await response.blob();
  await firebase.storage().ref(`Photos/${fileName}`).put(file);
  alert("Upload!");
  const processedPhoto = await firebase
    .storage()
    .ref("Photos")
    .child(fileName)
    .getDownloadURL();
  return processedPhoto;
};

export const uploadPostToServer = async (userId, login, photo, comment, location) => {
  const photoToSend = await uploadPhoto(photo);
  await firebase
    .firestore()
    .collection("posts")
    .add({ userId, login, photoToSend, comment, location: location.coords });
  
};
