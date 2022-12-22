// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-CIVHxCOeniL6mp_Jz8Ws8zpxsDBgJro",
  authDomain: "pawster-217a6.firebaseapp.com",
  projectId: "pawster-217a6",
  storageBucket: "pawster-217a6.appspot.com",
  messagingSenderId: "970447430650",
  appId: "1:970447430650:web:fb698c0034aa1d0b28ba43",
  measurementId: "G-L4S75BL81F"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);