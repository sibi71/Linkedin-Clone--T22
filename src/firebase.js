// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore,serverTimestamp} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDdLUrotKZpaheTXpWEy5oQOJ5yx6In3FQ",
  authDomain: "linkdin-clone-9192e.firebaseapp.com",
  projectId: "linkdin-clone-9192e",
  storageBucket: "linkdin-clone-9192e.appspot.com",
  messagingSenderId: "56669361842",
  appId: "1:56669361842:web:d44752db68da3a119b1bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const storage = getStorage()
const provider = new GoogleAuthProvider()
const timestamp = serverTimestamp()


export {app,db,auth,storage,provider,timestamp};