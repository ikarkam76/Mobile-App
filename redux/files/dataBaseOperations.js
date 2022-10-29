import { firebase } from "../../fireBase/config";

export const uploadPhoto = async (photo) => {
  const response = await fetch(photo);
  const file = await response.blob();
  const fileName = photo.substring(photo.lastIndexOf('/')+1)
  var ref = firebase.storage().ref().child(`Photos/${fileName}`).put(file);
  try {
    await ref;
  } catch (error) {
    console.log(error.message);
  }
  console.log('upload!');;
};
