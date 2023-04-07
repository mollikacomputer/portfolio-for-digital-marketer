// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArb94UnDRDI7F_ur_ZeJvSopqlr1ldfa8",
  authDomain: "walid-689ed.firebaseapp.com",
  projectId: "walid-689ed",
  storageBucket: "walid-689ed.appspot.com",
  messagingSenderId: "692715049247",
  appId: "1:692715049247:web:8262f7c613663efa20a02a"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;