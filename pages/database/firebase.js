// Firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firestore imports
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Config
const firebaseConfig = {
  apiKey: process.env['firebaseAPIKey'],
  authDomain: "cogniforge-web.firebaseapp.com",
  projectId: "cogniforge-web",
  storageBucket: "cogniforge-web.appspot.com",
  messagingSenderId: "334228122385",
  appId: "1:334228122385:web:09af02a3ed4fb597e6bab0",
  measurementId: "G-LPS721ZDER"
};

// Initialize app and analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize db
const db = getFirestore();