// Your Firebase configuration here
const firebaseConfig = {
    apiKey: "AIzaSyDdUr1YDDRxgpR7ihRKULr9_D0-laXBd_U",
    authDomain: "club-entry-project.firebaseapp.com",
    projectId: "club-entry-project",
    storageBucket: "club-entry-project.appspot.com",
    messagingSenderId:"855567589688",
    appId: "1:855567589688:web:24eb4d821571c5955821cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
