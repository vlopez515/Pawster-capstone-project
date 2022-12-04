// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdKAorTBC-SUVWQaNm3S5iPHd-2QaPcE",
  authDomain: "pawster-capstone-app.firebaseapp.com",
  projectId: "pawster-capstone-app",
  storageBucket: "pawster-capstone-app.appspot.com",
  messagingSenderId: "865391465843",
  appId: "1:865391465843:web:f94bc719081df8daaee106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);