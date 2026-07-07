// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDe3TJZmt_-lcOEEdk4h5wcJUH7uXGJ68I",
  authDomain: "redragon-gold.firebaseapp.com",
  projectId: "redragon-gold",
  storageBucket: "redragon-gold.firebasestorage.app",
  messagingSenderId: "532760819810",
  appId: "1:532760819810:web:408f4b2b58f5b10169793b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)