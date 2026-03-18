// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyAofhP1NgLuK6B8JcTtWzznNCW-4chr6VI",
//  authDomain: "gestiones-3eb1d.firebaseapp.com",
//  projectId: "gestiones-3eb1d",
//  storageBucket: "gestiones-3eb1d.firebasestorage.app",
//  messagingSenderId: "287683794251",
//  appId: "1:287683794251:web:9f5df2c4e8812b9b1244ce"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000',
  firebase: {
    apiKey: "AIzaSyAofhP1NgLuK6B8JcTtWzznNCW-4chr6VI",
    authDomain: "gestiones-3eb1d.firebaseapp.com",
    projectId: "gestiones-3eb1d",
    storageBucket: "gestiones-3eb1d.firebasestorage.app",
    messagingSenderId: "287683794251",
    appId: "1:287683794251:web:9f5df2c4e8812b9b1244ce"
  }
};