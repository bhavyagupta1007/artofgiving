import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


 const firebaseConfig = {
  apiKey: "AIzaSyCE3MDDpGGEkp6JJY4iL-_sByh0ZdU5Q9w",
  authDomain: "cart-213b4.firebaseapp.com",
  databaseURL: "https://cart-213b4.firebaseio.com",
  projectId: "cart-213b4",
  storageBucket: "cart-213b4.appspot.com",
  messagingSenderId: "298301504267",
  appId: "1:298301504267:web:198d6b4c5e804cbccc400e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


