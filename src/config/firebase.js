// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvI9rUcDLrMItakV_caempsB4cY86v9KY",
  authDomain: "react-project-68446.firebaseapp.com",
  projectId: "react-project-68446",
  storageBucket: "react-project-68446.appspot.com",
  messagingSenderId: "97630124742",
  appId: "1:97630124742:web:f94029bd2d91c2e58675c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
