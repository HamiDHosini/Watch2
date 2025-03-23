// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCfp3p2FwaO0mzhII9XCcbk1j8v9oDnx_8",
  authDomain: "ansar-900ae.firebaseapp.com",
  projectId: "ansar-900ae",
  storageBucket: "ansar-900ae.appspot.com",
  messagingSenderId: "397643058604",
  appId: "1:397643058604:web:9f08fa16433c68e8f27e09",
  measurementId: "G-NTML0W8ZJY"
};

// مقداردهی Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
