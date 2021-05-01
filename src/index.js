import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyA0rAIjorki59XuPBDYmSImqG_svKbDeNI",
  authDomain: "gurmanshaan-evernote-clone.firebaseapp.com",
  projectId: "gurmanshaan-evernote-clone",
  storageBucket: "gurmanshaan-evernote-clone.appspot.com",
  messagingSenderId: "536322610936",
  appId: "1:536322610936:web:a9123c7888685a17da0d0d"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

