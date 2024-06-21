// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1uflOmaLpOTNCl2Vt5J4u-InuEeYNqkM',
  authDomain: 'tracker-d9f72.firebaseapp.com',
  projectId: 'tracker-d9f72',
  storageBucket: 'tracker-d9f72.appspot.com',
  messagingSenderId: '139814220767',
  appId: '1:139814220767:web:ea7b5e3b7672146e31ca6a',
  measurementId: 'G-PM1E32ECX0',
};

// Initialize Firebase
export const FB_App = initializeApp(firebaseConfig);
export const Firestore = getFirestore(FB_App);
export const Analytics = getAnalytics(FB_App);
