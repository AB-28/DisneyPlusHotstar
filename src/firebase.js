//import { initializeApp } from "firebase/app";
//import { getFirestore } from 'firebase/firestore/lite';
//import { firestore as db } from './firebase-config'
//import firebase from './firebase-config';
//import firebase from 'firebase/compat/app';
//import firebase from "/node_modules/firebase";
//import 'firebase/compat/firestore';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    projectId: "disneyplus-clone-a33d5",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "37918794208",
    appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

//https://console.firebase.google.com/project/disneyplus-clone-6b576/settings/general/web:ZWNlODRlNDMtZTIwYi00ZTdlLTkyZjYtNWZmY2U3YzMzNDFl