// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNx_8Xyc8u6WS7-1fNdzM7Bw1GYKrROFQ",
  authDomain: "formularioregistro-f8496.firebaseapp.com",
  projectId: "formularioregistro-f8496",
  storageBucket: "formularioregistro-f8496.firebasestorage.app",
  messagingSenderId: "820906370629",
  appId: "1:820906370629:web:f41f5da4adf2bea361652c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;