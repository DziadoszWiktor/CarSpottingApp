//import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getDownloadURL,getStorage,ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADW6q4mjoZth-ettADh9FhAELIRap4q5w",
  authDomain: "carspottingapp.firebaseapp.com",
  projectId: "carspottingapp",
  storageBucket: "carspottingapp.appspot.com",
  messagingSenderId: "679138561462",
  appId: "1:679138561462:web:e4e6e0ae6fda58cc6e8517"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = firebase.firestore();

const storage = getStorage();

export { auth };
export { db };
export { storage };
export { ref };
export { getDownloadURL };
