import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl6NPVXXTtK9zA669UY-aIWU8UrV-B-i0",
    authDomain: "gifted-chat-9a537.firebaseapp.com",
    projectId: "gifted-chat-9a537",
    storageBucket: "gifted-chat-9a537.appspot.com",
    messagingSenderId: "753059370650",
    appId: "1:753059370650:web:74f224fe500671d6ce3123"
};



// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };


