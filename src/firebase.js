import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAndRi5a3IBx1H26ZhLimpXTgWGFJC5ghs",
    authDomain: "userlocation-310fc.firebaseapp.com",
    projectId: "userlocation-310fc",
    storageBucket: "userlocation-310fc.appspot.com",
    messagingSenderId: "414893666555",
    appId: "1:414893666555:web:2b0fbc5944ff4c7876805e"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;