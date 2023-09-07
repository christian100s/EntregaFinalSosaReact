// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const APIKEY = import.meta.env.VITE_apiKey;
const AUTH_DOMAIN = import.meta.env.VITE_authDomain;
const PROJECT_ID = import.meta.env.VITE_projectId;
const STORAGE_BUCKET = import.meta.env.VITE_storageBucket;
const MESSAGING_SENDER_ID = import.meta.env.VITE_messagingSenderId;
const APP_ID = import.meta.env.VITE_appId;
const MEASUREMENT_ID = import.meta.env.VITE_measurementId;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:APIKEY,
  authDomain:AUTH_DOMAIN,
  projectId:PROJECT_ID,
  storageBucket:STORAGE_BUCKET,
  messagingSenderId:MESSAGING_SENDER_ID,
  appId:APP_ID,
  measurementId:MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);