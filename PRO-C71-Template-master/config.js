import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBWLchXbpZStf5nhLEFgXzBIoNj0UAh_xU",
    authDomain: "project71-cbfe3.firebaseapp.com",
    projectId: "project71-cbfe3",
    storageBucket: "project71-cbfe3.appspot.com",
    messagingSenderId: "717336232020",
    appId: "1:717336232020:web:56a00a3b77bca812b6edc1"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
