// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiErSF-LN_NRVLEmVF_KkRC2STs_Nzqik",
  authDomain: "igowithigho-4bbd2.firebaseapp.com",
  projectId: "igowithigho-4bbd2",
  storageBucket: "igowithigho-4bbd2.appspot.com",
  messagingSenderId: "495385084960",
  appId: "1:495385084960:web:8d49cf6b884a349b222845"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export { app }