// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIA3_u15WtUFz_36oxJUZN542TI-rpKAE",
  authDomain: "test-d6398.firebaseapp.com",
  projectId: "test-d6398",
  storageBucket: "test-d6398.appspot.com",
  messagingSenderId: "586139417244",
  appId: "1:586139417244:web:fcfbe45ff1c9e7a2fdcb59",
  measurementId: "G-3NLW1E3ZSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);