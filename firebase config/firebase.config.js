import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth , createUserWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, setDoc,
    doc } from  "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
    const firebaseConfig = {
        apiKey: "AIzaSyAfWQlJmaJtqjsvnJsII6I5Gzhu2y8QFxw",
        authDomain: "for-login-and-sign-up.firebaseapp.com",
        projectId: "for-login-and-sign-up",
        storageBucket: "for-login-and-sign-up.appspot.com",
        messagingSenderId: "289504623376",
        appId: "1:289504623376:web:4772277e38f1ccd1d04395"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{
    auth,
    app,
    db,
    createUserWithEmailAndPassword,
    setDoc,
    doc
}