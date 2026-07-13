  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyClzlYjFoDykvvbRrmnsRgP4mzMK_A-Cwk",
    authDomain: "return-redragon.firebaseapp.com",
    projectId: "return-redragon",
    storageBucket: "return-redragon.firebasestorage.app",
    messagingSenderId: "576560717893",
    appId: "1:576560717893:web:c291f3442aaafd538c832c",
    measurementId: "G-2S99KV1QSC",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Firebase Services
  export const auth = getAuth(app);
  export const db = getFirestore(app);

  export default app;