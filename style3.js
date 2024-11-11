import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHynVFiW6xNPwF6BqwoXvaMm0p3Vb9XY",
  authDomain: "hotel0333.firebaseapp.com",
  projectId: "hotel0333",
  storageBucket: "hotel0333.firebasestorage.app",
  messagingSenderId: "314143602013",
  appId: "1:314143602013:web:4748f971c2e923f766e4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getDatabase(app);
document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    });
    alert("Login successfully")
})


alert('Registration successful! Redirecting to main page...');
            window.location.href = 'menu.html';