import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATXlcZ5OfUUsgA3jHCT2oHiZ8HSwoHpug",
  authDomain: "bayside-team-prueba.firebaseapp.com",
  projectId: "bayside-team-prueba",
  storageBucket: "bayside-team-prueba.appspot.com",
  messagingSenderId: "926150233419",
  appId: "1:926150233419:web:b348f5da8622e589ddacce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)