import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnYZQLZHPFVgE1II5Xhqj9okCVON8Dz5M",
  authDomain: "takenote-9e295.firebaseapp.com",
  projectId: "takenote-9e295",
  storageBucket: "takenote-9e295.appspot.com",
  messagingSenderId: "38339963755",
  appId: "1:38339963755:web:2cbabe144f321666a47a2e",
  measurementId: "G-DQJ3P8GZSQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
