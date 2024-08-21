
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnVkcHp7rde56zwDl6ry-QRXlz4z9tyMI",
  authDomain: "fir-web-project-c201f.firebaseapp.com",
  projectId: "fir-web-project-c201f",
  storageBucket: "fir-web-project-c201f.appspot.com",
  messagingSenderId: "735737386247",
  appId: "1:735737386247:web:6a0c3823755c10623da1a2",
  measurementId: "G-FTET62DZZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
