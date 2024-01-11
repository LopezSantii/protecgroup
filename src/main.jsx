import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJET_ID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRESTORE_APP_ID,
  measurementId: import.meta.env.VITE_FIRESTORE_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
