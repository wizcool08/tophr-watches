import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDUS9clZLmd0w2FMn55Jo4_672sF6qhjUY",
  authDomain: "tophrs-db.firebaseapp.com",
  databaseURL: "https://tophrs-db.firebaseio.com",
  projectId: "tophrs-db",
  storageBucket: "",
  messagingSenderId: "635147475449",
  appId: "1:635147475449:web:10b6ce3304b324d5"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
