// Import the functions you need from the SDKs you need

// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBE1h5EDRVNKzkYFYxs5MOMZkFcxnob2DM',
  authDomain: 'deeco-soonami-poc.firebaseapp.com',
  projectId: 'deeco-soonami-poc',
  storageBucket: 'deeco-soonami-poc.appspot.com',
  messagingSenderId: '860069608765',
  appId: '1:860069608765:web:cc095b222b9b3313e21954',
  measurementId: 'G-K9EMXTGB0V'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const db = getFirestore(app);

// Initialize Firebase
