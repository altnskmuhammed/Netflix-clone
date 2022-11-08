// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlNavn9flyXSZMJLmY0GahzRiqmKcJYI0",
  authDomain: "netflix-c882e.firebaseapp.com",
  projectId: "netflix-c882e",
  storageBucket: "netflix-c882e.appspot.com",
  messagingSenderId: "681544352372",
  appId: "1:681544352372:web:ff8aafff9a39716511c721",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
