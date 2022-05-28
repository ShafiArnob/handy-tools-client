// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2L5jSal4-7fhZaCTpABxoSkRvpuBdvLc",
  authDomain: "handy-tools-48f4d.firebaseapp.com",
  projectId: "handy-tools-48f4d",
  storageBucket: "handy-tools-48f4d.appspot.com",
  messagingSenderId: "263609494717",
  appId: "1:263609494717:web:33902767622aca5bb3dbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;