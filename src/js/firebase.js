import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3BXbIkNJQgdw8733L0vu0369ljmErZg4",
    authDomain: "filmoteka-js5.firebaseapp.com",
    projectId: "filmoteka-js5",
    storageBucket: "filmoteka-js5.appspot.com",
    messagingSenderId: "863400992859",
    appId: "1:863400992859:web:f6fef9c6c8f1e9c49a9f7e"
  };

  export const app = initializeApp(firebaseConfig);