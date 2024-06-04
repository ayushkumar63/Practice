import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4IX-6rHgPyFhcYhPJKH3b8NgT2YmOEi8",
  authDomain: "ayushchat-c4d1b.firebaseapp.com",
  projectId: "ayushchat-c4d1b",
  storageBucket: "ayushchat-c4d1b.appspot.com",
  messagingSenderId: "22159092135",
  appId: "1:22159092135:web:fb0e54985e7f6b49c3ee82",
  measurementId: "G-0XRCC2F6CP",
};

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
