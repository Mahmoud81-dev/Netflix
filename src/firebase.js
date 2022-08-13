// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgfY9IIwE7gNts9Q1HzCO57Lioje-hLCI",
  authDomain: "netflix-react-c3f93.firebaseapp.com",
  projectId:"netflix-react-c3f93",
  storageBucket:"netflix-react-c3f93.appspot.com",
  messagingSenderId:"170916215586",
  appId:"1:170916215586:web:2da6140ec039a641fd837b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); //using in email pass
export const db = getFirestore(app);
