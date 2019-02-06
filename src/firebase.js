import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB6F0Y7RndU5yRHAcgs7DYS2XteeHDHjJA",
    authDomain: "test-54a5b.firebaseapp.com",
    databaseURL: "https://test-54a5b.firebaseio.com",
    projectId: "test-54a5b",
    storageBucket: "test-54a5b.appspot.com",
    messagingSenderId: "313380505217"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore()
export { firestore }