
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB66_vQ3aKJ5LmuE9SIS2kcLmmQ_JanO8A",
  authDomain: "fir-database-9500c.firebaseapp.com",
  projectId: "fir-database-9500c",
  storageBucket: "fir-database-9500c.appspot.com",
  messagingSenderId: "376585977637",
  appId: "1:376585977637:web:abfe599414aeb1edc264cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

