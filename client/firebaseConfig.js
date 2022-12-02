// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvicOSLT41h4BbHJl4OkN5SA6FEEvLfK0',
  authDomain: 'deeco-ec66f.firebaseapp.com',
  projectId: 'deeco-ec66f',
  storageBucket: 'deeco-ec66f.appspot.com',
  messagingSenderId: '377832398102',
  appId: '1:377832398102:web:8c3fab2bc40768028c0437'

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
