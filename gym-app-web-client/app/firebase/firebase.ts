// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  User
} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDns3dHuI-bqrHo1Fi3Djd9iPFEmK5SjsU",
  authDomain: "gym-app-d2974.firebaseapp.com",
  projectId: "gym-app-d2974",
  storageBucket: "gym-app-d2974.appspot.com",
  messagingSenderId: "518863638780",
  appId: "1:518863638780:web:381418539da5421977c779",
  measurementId: "G-289Y5QJVN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
