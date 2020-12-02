import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD4OgYUx7m1H76ZNuqH6ZpwEkCTdJNH7Ws",
  authDomain: "test-72ac4.firebaseapp.com",
  databaseURL: "https://test-72ac4.firebaseio.com",
  projectId: "test-72ac4",
  storageBucket: "test-72ac4.appspot.com",
  messagingSenderId: "667074768576",
  appId: "1:667074768576:web:6ecefdb1002a725a028725",
  measurementId: "G-WD87FXP6T3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

firestore.settings({});

// refs
export const PostsRef = firestore.collection("posts");

export default firebase;
