import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAr0ZTzVrr5A3G6McIpThi8NUDlCxVSFg0",
    authDomain: "disneyplus-clone-6b576.firebaseapp.com",
    projectId: "disneyplus-clone-6b576",
    storageBucket: "disneyplus-clone-6b576.appspot.com",
    messagingSenderId: "728095716695",
    appId: "1:728095716695:web:7304623d028a6a4362fa12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

//https://console.firebase.google.com/project/disneyplus-clone-6b576/settings/general/web:ZWNlODRlNDMtZTIwYi00ZTdlLTkyZjYtNWZmY2U3YzMzNDFl