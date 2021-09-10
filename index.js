// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD54V2JWdW-G8nUtrSmfIiOzMzllsoxCHE",
  authDomain: "portafolio-adrian8a.firebaseapp.com",
  projectId: "portafolio-adrian8a",
  storageBucket: "portafolio-adrian8a.appspot.com",
  messagingSenderId: "300683809741",
  appId: "1:300683809741:web:5ca1e27162a1d086926a84",
  measurementId: "G-F1PZ58DPND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);