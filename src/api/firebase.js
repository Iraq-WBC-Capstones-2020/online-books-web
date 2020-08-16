import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCr9W670NPUv2MmP_wH_5-5cTOpJ_01WlM",
    authDomain: "bookszone-49e46.firebaseapp.com",
    databaseURL: "https://bookszone-49e46.firebaseio.com",
    projectId: "bookszone-49e46",
    storageBucket: "bookszone-49e46.appspot.com",
    messagingSenderId: "206542430317",
    appId: "1:206542430317:web:aa6bed48dc69a6e9319f64",
    measurementId: "G-KJJRRWZZTJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export const usersRef = db.collection('users');

export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;