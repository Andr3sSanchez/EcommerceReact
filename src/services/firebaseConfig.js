// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhq_oVwkJhT_E93S-NxGoXhoYhv_I0Qw",
  authDomain: "overall-store.firebaseapp.com",
  projectId: "overall-store",
  storageBucket: "overall-store.appspot.com",
  messagingSenderId: "45803862838",
  appId: "1:45803862838:web:0e673e1ccc70e43ebd9197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)