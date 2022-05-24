// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
import 'forebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl6NPVXXTtK9zA669UY-aIWU8UrV-B-i0",
    authDomain: "gifted-chat-9a537.firebaseapp.com",
    projectId: "gifted-chat-9a537",
    storageBucket: "gifted-chat-9a537.appspot.com",
    messagingSenderId: "753059370650",
    appId: "1:753059370650:web:74f224fe500671d6ce3123"
};

let app;

// Initialize Firebase
if (firebaseConfig.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };


