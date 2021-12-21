
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCGpWwa44b0clzGOhsRV11OHDijlXXR0VA",
  authDomain: "proyectoreacts1.firebaseapp.com",
  projectId: "proyectoreacts1",
  storageBucket: "proyectoreacts1.appspot.com",
  messagingSenderId: "572777310897",
  appId: "1:572777310897:web:b80a5855710b74c52d5090"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)