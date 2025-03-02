// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7yBtbSTcxA7_A7sMExb69Q9chEz5lQo4",
  authDomain: "jurident-9a928.firebaseapp.com",
  databaseURL: "https://jurident-9a928-default-rtdb.firebaseio.com",
  projectId: "jurident-9a928",
  storageBucket: "jurident-9a928.appspot.com",
  messagingSenderId: "305549263527",
  appId: "1:305549263527:web:1e08b00c34ef402bd3d182",
  measurementId: "G-1FQY6Y4Z6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()