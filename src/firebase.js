import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyB6F0Y7RndU5yRHAcgs7DYS2XteeHDHjJA",
    authDomain: "test-54a5b.firebaseapp.com",
    databaseURL: "https://test-54a5b.firebaseio.com",
    projectId: "test-54a5b",
    storageBucket: "test-54a5b.appspot.com",
    messagingSenderId: "313380505217"
};

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.firestore = app.firestore();
        this.storage = app.storage();
        this.auth = app.auth();
        // this.auth.
    }
    doSignInWithEmailAndPassword(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }
}
export default new Firebase();