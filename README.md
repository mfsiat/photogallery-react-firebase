// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqvU8JOgqbcPJgOU7VaSGi7pDs9BkjASs",
  authDomain: "my-photo-app-firegram.firebaseapp.com",
  projectId: "my-photo-app-firegram",
  storageBucket: "my-photo-app-firegram.appspot.com",
  messagingSenderId: "167553436977",
  appId: "1:167553436977:web:de45a0940b92038edb3410",
  measurementId: "G-59VPXWTR39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBqvU8JOgqbcPJgOU7VaSGi7pDs9BkjASs",
    authDomain: "my-photo-app-firegram.firebaseapp.com",
    projectId: "my-photo-app-firegram",
    storageBucket: "my-photo-app-firegram.appspot.com",
    messagingSenderId: "167553436977",
    appId: "1:167553436977:web:de45a0940b92038edb3410",
    measurementId: "G-59VPXWTR39"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


## Firestore 
- Collection for images, image urls will be stored on firestore
