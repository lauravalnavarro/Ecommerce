import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDCKZ5Sp7JeIpI_KxlJ0hyxVoDqxi5y86Q",
  authDomain: "test-rl4.firebaseapp.com",
  projectId: "test-rl4",
  storageBucket: "test-rl4.appspot.com",
  messagingSenderId: "928359458039",
  appId: "1:928359458039:web:0d4b0114688787e97b5ff2",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);