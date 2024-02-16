// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJ7rgpbaT2BJD2EVnvGf1PBvpOrPGWr7I",
  authDomain: "capacity-building-9a707.firebaseapp.com",
  projectId: "capacity-building-9a707",
  storageBucket: "capacity-building-9a707.appspot.com",
  messagingSenderId: "408484283570",
  appId: "1:408484283570:web:f601566930c72673ce75ab",
  measurementId: "G-GC4MMXPW4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {auth, app};