import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQc_QtFxFuKpJwhIdAjAr3B8lc27nquho",
  authDomain: "final-exam-b1cad.firebaseapp.com",
  projectId: "final-exam-b1cad",
  storageBucket: "final-exam-b1cad.appspot.com",
  messagingSenderId: "900916673042",
  appId: "1:900916673042:web:501fa7228677616954f6cb",
  measurementId: "G-HFVBX5VH9Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

