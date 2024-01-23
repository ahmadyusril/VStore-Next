// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSUft68S3xdzzOYx1fDa9T2SBoXUF-Idw",
    authDomain: "vstore-6e13a.firebaseapp.com",
    projectId: "vstore-6e13a",
    storageBucket: "vstore-6e13a.appspot.com",
    messagingSenderId: "935336386578",
    appId: "1:935336386578:web:68ce91d5d5ec014123f8cb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;