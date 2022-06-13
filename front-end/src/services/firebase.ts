
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1GL5exvQOV-SB33G2woIAIyffSEt3Rpw",
  authDomain: "turipocos.firebaseapp.com",
  projectId: "turipocos",
  storageBucket: "turipocos.appspot.com",
  messagingSenderId: "984123992575",
  appId: "1:984123992575:web:df48fa4728b6c01e2bdfca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
console.log(auth)

export const db = getFirestore(app)