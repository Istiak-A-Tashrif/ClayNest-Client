// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO_XPjGd9VNxwzVyZvyR3Qhk_XBvq5Fxg",
  authDomain: "art-and-craft-store-a7a3b.firebaseapp.com",
  projectId: "art-and-craft-store-a7a3b",
  storageBucket: "art-and-craft-store-a7a3b.appspot.com",
  messagingSenderId: "571090395071",
  appId: "1:571090395071:web:875e13bca7c3b62f058b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;