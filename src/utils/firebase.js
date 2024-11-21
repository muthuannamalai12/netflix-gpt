// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjU5NI2mXaPrFtaMfBOISgtj5JbNdiAcA",
  authDomain: "netflix-gpt-648fb.firebaseapp.com",
  projectId: "netflix-gpt-648fb",
  storageBucket: "netflix-gpt-648fb.firebasestorage.app",
  messagingSenderId: "432635638226",
  appId: "1:432635638226:web:347ddd641dbb1a9661d80b",
  measurementId: "G-YWYWC560M3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
