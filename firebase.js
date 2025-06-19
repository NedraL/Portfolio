// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCisxaBY7d79dfFPqSHDEBjssCm47gI8l4",
  authDomain: "formulaire-contact-98e50.firebaseapp.com",
  projectId: "formulaire-contact-98e50",
  storageBucket: "formulaire-contact-98e50.firebasestorage.app",
  messagingSenderId: "1072683175456",
  appId: "1:1072683175456:web:b58d99a2b0202e12e47645",
  measurementId: "G-D5F74RB11D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);