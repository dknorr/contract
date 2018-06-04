// src/firebase.js
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAlc6zwD4yNjPaiFQpSVX2pxSajfy3D9eE",
  authDomain: "contract-fa5b8.firebaseapp.com",
  databaseURL: "https://contract-fa5b8.firebaseio.com",
  projectId: "contract-fa5b8",
  storageBucket: "contract-fa5b8.appspot.com",
  messagingSenderId: "1043274573398"
};
firebase.initializeApp(config);
export default firebase;
