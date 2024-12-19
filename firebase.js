// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzoqXrddL24Nby9PDfq-LjzFg5YRzAMSI",
  authDomain: "inventory-management-5c568.firebaseapp.com",
  projectId: "inventory-management-5c568",
  storageBucket: "inventory-management-5c568.appspot.com",
  messagingSenderId: "328786413083",
  appId: "1:328786413083:web:4c373addad735229271abe",
  measurementId: "G-BPNH6TL4DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };