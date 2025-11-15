// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB72x2XnUodaOxtIf50A16n4309otdkW7U",
  authDomain: "netflix-gpt-435ad.firebaseapp.com",
  projectId: "netflix-gpt-435ad",
  storageBucket: "netflix-gpt-435ad.firebasestorage.app",
  messagingSenderId: "601252263010",
  appId: "1:601252263010:web:e0476bde39c490ae528d3b",
  measurementId: "G-TFHL2XKGJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();