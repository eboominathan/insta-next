// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-349cc.firebaseapp.com",
  projectId: "insta-next-349cc",
  storageBucket: "insta-next-349cc.appspot.com",
  messagingSenderId: "876518373445",
  appId: "1:876518373445:web:9d910c594322a7f32e8b2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);