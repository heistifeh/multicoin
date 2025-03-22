// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multicoin-78b61.firebaseapp.com",
  projectId: "multicoin-78b61",
  storageBucket: "multicoin-78b61.firebasestorage.app",
  messagingSenderId: "964216390964",
  appId: "1:964216390964:web:6c3025f1ecb93276a85161"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);