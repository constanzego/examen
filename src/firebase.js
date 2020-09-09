import firebase from 'firebase/app';
import 'firebase/firestore';   

var firebaseConfig = {
    apiKey: "AIzaSyDVLVjO8uDghLO5JBCws5ljByq8IBPRDjU",
    authDomain: "prueba2-6664d.firebaseapp.com",
    databaseURL: "https://prueba2-6664d.firebaseio.com",
    projectId: "prueba2-6664d",
    storageBucket: "prueba2-6664d.appspot.com",
    messagingSenderId: "1034261264779",
    appId: "1:1034261264779:web:b15d845f4a54fef34fd78e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
export const db = firebaseApp.firestore();
