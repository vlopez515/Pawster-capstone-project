

import firebase from "firebase/app";
 import "firebase/auth";
//import {getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyANUqc-wGTX9Qp0EpP15uVi3fEsJGQyxBw",
//   authDomain: "majo-349b7.firebaseapp.com",
//   projectId: "majo-349b7",
//   storageBucket: "majo-349b7.appspot.com",
//   messagingSenderId: "322715951472",
//   appId: "1:322715951472:web:6877c7628d80d2a12e6fb5",
//   measurementId: "G-G8ZXPTM3C0"
// };
const firebaseConfig = {
    apiKey: "AIzaSyBYrAizgRcLoDLbjT1Z9J8um6G23oiszdw",
    authDomain: "pawster-capstone.firebaseapp.com",
    projectId: "pawster-capstone",
    storageBucket: "pawster-capstone.appspot.com",
    messagingSenderId: "465105046179",
    appId: "1:465105046179:web:6afd48ad1661887ec60d16"
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
// export const auth = getAuth(app);

const googleProvider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
  await auth.signInWithPopup(googleProvider);
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