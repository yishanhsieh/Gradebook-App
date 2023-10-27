import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: "fir-1ee6c.firebaseapp.com",
  projectId: "fir-1ee6c",
  storageBucket: "fir-1ee6c.appspot.com",
  messagingSenderId: "883353951980",
  appId: "1:883353951980:web:d33c152df079212e950fc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
