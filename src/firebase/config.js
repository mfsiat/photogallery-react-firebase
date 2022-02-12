import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqvU8JOgqbcPJgOU7VaSGi7pDs9BkjASs",
  authDomain: "my-photo-app-firegram.firebaseapp.com",
  projectId: "my-photo-app-firegram",
  storageBucket: "my-photo-app-firegram.appspot.com",
  messagingSenderId: "167553436977",
  appId: "1:167553436977:web:de45a0940b92038edb3410",
  measurementId: "G-59VPXWTR39",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// host files on firebase storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, analytics };
