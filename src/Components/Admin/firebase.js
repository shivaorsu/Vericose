
import { initializeApp } from "firebase/app";
 //import getFirestore from 'firebase/firestore';
 import {getStorage} from 'firebase/storage';
 import {getFirestore} from 'firebase/firestore';
 

const firebaseConfig = {
  apiKey: "AIzaSyBiVpEADiYBgQiJrPjf8A_cP6KddsmDbvQ",
  authDomain: "politiparty-9483a.firebaseapp.com",
  databaseURL: "https://politiparty-9483a-default-rtdb.firebaseio.com",
  projectId: "politiparty-9483a",
  storageBucket: "politiparty-9483a.appspot.com",
  messagingSenderId: "1006099645785",
  appId: "1:1006099645785:web:7062ea1ebee5328995b848",
  measurementId: "G-RLXZV51GJL"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app);
