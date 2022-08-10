import firebase from 'firebase';
import { initializeApp } from "firebase/app";
// add SDK Firebase

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPKKJFZWGm8HfxxFjtlJZEYFAsFZDj1_I",
  authDomain: "votingapp-480d9.firebaseapp.com",
  databaseURL: "https://votingapp-480d9-default-rtdb.firebaseio.com",
  projectId: "votingapp-480d9",
  storageBucket: "votingapp-480d9.appspot.com",
  messagingSenderId: "628786296405",
  appId: "1:628786296405:web:f53853627e8b15d5a446dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();