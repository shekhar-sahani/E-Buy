import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAOjsRrpHeANmeUAKfD0ZsRlRNsmOAy0OM",
  authDomain: "authentication-e4f46.firebaseapp.com",
  projectId: "authentication-e4f46",
  storageBucket: "authentication-e4f46.appspot.com",
  messagingSenderId: "1093004886736",
  appId: "1:1093004886736:web:e14910bb7ee4a5ecc254d5",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
