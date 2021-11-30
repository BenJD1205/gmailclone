import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCyMGTeBc1nfC10t_pUYA1qSiidH7el2DM",
    authDomain: "clone-3121a.firebaseapp.com",
    projectId: "clone-3121a",
    storageBucket: "clone-3121a.appspot.com",
    messagingSenderId: "1089834714658",
    appId: "1:1089834714658:web:a77520e9eb5f98ee8e2c7b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth, provider}