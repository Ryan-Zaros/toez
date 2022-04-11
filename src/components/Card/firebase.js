import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDVBxZW_x51OwnzG9op86002RNvmJ-JHBQ",
    authDomain: "tinder-clone-2d427.firebaseapp.com",
    projectId: "tinder-clone-2d427",
    storageBucket: "tinder-clone-2d427.appspot.com",
    messagingSenderId: "432252268472",
    appId: "1:432252268472:web:e2703f62b4620a6e73694d",
    measurementId: "G-7F51PC4JXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;