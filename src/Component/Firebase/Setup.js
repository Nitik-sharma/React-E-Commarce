// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB248o67be_p1bWdYPOxoYFNNUQVFpE8OI",
  authDomain: "e-cmoarce.firebaseapp.com",
  projectId: "e-cmoarce",
  storageBucket: "e-cmoarce.appspot.com",
  messagingSenderId: "232441216709",
  appId: "1:232441216709:web:ead6cc1e1c14fce1303aac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const goggleProvider = new GoogleAuthProvider();
