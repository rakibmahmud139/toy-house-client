// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1ohAwhyxyPPvzDyurj76iqG6SZLiZ63o",
    authDomain: "car-toy-house-assignment.firebaseapp.com",
    projectId: "car-toy-house-assignment",
    storageBucket: "car-toy-house-assignment.appspot.com",
    messagingSenderId: "1035661326050",
    appId: "1:1035661326050:web:b3f811d366158b033f10bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;