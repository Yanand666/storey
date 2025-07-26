// Firebase config (DEMO. Replace with real config)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-demo-key",
  authDomain: "your-store.firebaseapp.com",
  projectId: "your-store",
  storageBucket: "your-store.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerBtn").onclick = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then(user => {
      document.getElementById("status").textContent = "Реєстрація успішна!";
    })
    .catch(err => {
      document.getElementById("status").textContent = err.message;
    });
};

document.getElementById("loginBtn").onclick = () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, pass)
    .then(user => {
      document.getElementById("status").textContent = "Успішний вхід!";
    })
    .catch(err => {
      document.getElementById("status").textContent = err.message;
    });
};