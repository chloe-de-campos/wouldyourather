
// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "woulduratherbackend-default-rtdb.firebaseio.com/",
    projectId: "woulduratherbackend",
    storageBucket: "woulduratherbackend.appspot.com",
    messagingSenderId: "818373479500",
    appId: "1:818373479500:web:1565a9c8e99e2e4474f8e9",
    measurementId: "G-KWSXYGE7EG",
    databaseURL: "https://woulduratherbackend-default-rtdb.firebaseio.com/",
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
