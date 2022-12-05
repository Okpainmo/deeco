// Import the functions you need from the SDKs you need

// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration

/* dev: I was having .env issues because I got a new PC. Due to the limited time at hand to finish up the hackathon project I couldn't
focus to fix the issue.

It seemed my .env file was not being read - hence I left my credentials open 
to public view - permit that for this test/hackathon mode */

/* dev: The config data below, is different from the one in the .env file. That is because I kept changing 
firestore databases because the dev process was using up free tier firebase/firestore provisions. */

const firebaseConfig = {
  apiKey: 'AIzaSyD2PhJ3R1a-0lLJl1hkSyVf8q3L2cee3HM',
  authDomain: 'deeco-main-2.firebaseapp.com',
  projectId: 'deeco-main-2',
  storageBucket: 'deeco-main-2.appspot.com',
  messagingSenderId: '329972626782',
  appId: '1:329972626782:web:13eb6990792fcb0890cbcf'

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
