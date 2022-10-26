import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjCU77ya0PwuiEl_sVbFQsadkH8Nj389g",
  authDomain: "postsapp-2d088.firebaseapp.com",
  databaseURL: "https://postsapp-2d088-default-rtdb.firebaseio.com",
  projectId: "postsapp-2d088",
  storageBucket: "postsapp-2d088.appspot.com",
  messagingSenderId: "312852328271",
  appId: "1:312852328271:web:60cbff2366529b87975f3a",
  measurementId: "G-TGSZ4XR4ZE",
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
