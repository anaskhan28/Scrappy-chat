import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlpXJagVJfM7xmYAg5OysiCpcP64JqAm4",
  authDomain: "scrappy-chat.firebaseapp.com",
  projectId: "scrappy-chat",
  storageBucket: "scrappy-chat.appspot.com",
  messagingSenderId: "1069247591006",
  appId: "1:1069247591006:web:b8bdf70beef40c7457bacf",
  measurementId: "G-9T7C60TYPZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
