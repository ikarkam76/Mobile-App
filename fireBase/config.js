import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import "firebase/compat/auth";
import  "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2CZQYVN6nNjlwovsDWNcmg9_TDsU2jmo",
  authDomain: "mynewapp-8da66.firebaseapp.com",
  projectId: "mynewapp-8da66",
  storageBucket: "mynewapp-8da66.appspot.com",
  messagingSenderId: "498652769064",
  appId: "1:498652769064:web:cab25b208d856aa87cbe1d",
  measurementId: "G-WH9H6B5ZR6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };