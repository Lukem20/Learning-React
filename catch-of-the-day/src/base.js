import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_uIPAjHxkRsIKLyqNiL9Ak1wuPQRCs4c",
    authDomain: "catch-of-the-day---luke.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---luke-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;