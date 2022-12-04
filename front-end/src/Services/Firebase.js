// import firebase from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
const  { initializeApp }  = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyBYrAizgRcLoDLbjT1Z9J8um6G23oiszdw",
    authDomain: "pawster-capstone.firebaseapp.com",
    projectId: "pawster-capstone",
    storageBucket: "pawster-capstone.appspot.com",
    messagingSenderId: "465105046179",
    appId: "1:465105046179:web:6afd48ad1661887ec60d16"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
  await signInWithPopup(auth , googleProvider);
   } catch (err) {
    console.log(err);
  }
};

export const signOut = async () =>{
  try {
    await auth.signOut()
    alert("you've signed out - congrats.")
  } catch(err) {
    console.log(err)
  }
}