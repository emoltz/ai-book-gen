// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-book-gen.firebaseapp.com",
  projectId: "ai-book-gen",
  storageBucket: "ai-book-gen.appspot.com",
  messagingSenderId: "224218259368",
  appId: "1:224218259368:web:b1855aa0658ec3d0ce479d",
  measurementId: "G-PH0THZDL6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);