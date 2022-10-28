import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuTte8elI_z5Os6BDVSB25_fMKd0W0mfI",
  authDomain: "postsapp-caf53.firebaseapp.com",
  projectId: "postsapp-caf53",
  storageBucket: "postsapp-caf53.appspot.com",
  messagingSenderId: "932756018679",
  appId: "1:932756018679:web:ef064e57bcfd95d4f18af2",
  measurementId: "G-7GRJSJ1JQY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
