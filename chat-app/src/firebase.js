import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID 
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =  getFirestore();


























// const firebaseConfig = {
//   apiKey: "AIzaSyAlpXJagVJfM7xmYAg5OysiCpcP64JqAm4",
//   authDomain: "scrappy-chat.firebaseapp.com",
//   projectId: "scrappy-chat",
//   storageBucket: "scrappy-chat.appspot.com",
//   messagingSenderId: "1069247591006",
//   appId: "1:1069247591006:web:b8bdf70beef40c7457bacf",
//   measurementId: "G-9T7C60TYPZ" 
// };