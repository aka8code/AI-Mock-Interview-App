import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6MuVCoPlZgtF4gLSUytHoyRfauRRUpKw",
  authDomain: "a-mock-interview-react.firebaseapp.com",
  projectId: "a-mock-interview-react",
  storageBucket: "a-mock-interview-react.firebasestorage.app",
  messagingSenderId: "562529426596",
  appId: "1:562529426596:web:3761fe6054962866689a31",
  measurementId: "G-XX1CYFQJMG"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };