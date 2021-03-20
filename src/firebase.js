import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDt4JfE19eJcaHtbkOaA85cuwLW1WjzJhE",
    authDomain: "reactcrud-f3329.firebaseapp.com",
    projectId: "reactcrud-f3329",
    storageBucket: "reactcrud-f3329.appspot.com",
    messagingSenderId: "429947695702",
    appId: "1:429947695702:web:57abfa5a491811ada1c1f7",
    measurementId: "G-BRTGDJT2J0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };