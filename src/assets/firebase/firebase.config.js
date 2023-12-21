// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwTAqEuZvm246F1SA0i91mmSi0stBJ4iI",
  authDomain: "first-tesk.firebaseapp.com",
  projectId: "first-tesk",
  storageBucket: "first-tesk.appspot.com",
  messagingSenderId: "444208576568",
  appId: "1:444208576568:web:d35288a4c9584f91560ecd",
  measurementId: "G-MKY8BSD9D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
