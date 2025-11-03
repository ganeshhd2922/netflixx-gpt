// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaFSZKwlRFoslQ0Y3sCzDpnKOjXUhUHJI",
  authDomain: "netflixgpt-a8422.firebaseapp.com",
  projectId: "netflixgpt-a8422",
  storageBucket: "netflixgpt-a8422.firebasestorage.app",
  messagingSenderId: "978516999559",
  appId: "1:978516999559:web:997e74b52fc79dc84fa722",
  measurementId: "G-4SDJT7TWHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();