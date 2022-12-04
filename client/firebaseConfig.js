// Import the functions you need from the SDKs you need

// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBV8jUKICCa2f_rDXQe8B6leZfj4LDROo4',
  authDomain: 'deeco-test-3.firebaseapp.com',
  projectId: 'deeco-test-3',
  storageBucket: 'deeco-test-3.appspot.com',
  messagingSenderId: '32424368104',
  appId: '1:32424368104:web:04aad7c3cfdbad0ef7b65d'

  // apiKey: process.env.TILO_FIREBASE_API_KEY,
  // authDomain: process.env.TILO_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.TILO_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.TILO_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.TILO_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.TILO_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const db = getFirestore(app);

// Initialize Firebase
