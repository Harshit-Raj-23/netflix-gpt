// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqch69KB6rkgwMuymRnmvmGAN0N1WVRvs",
  authDomain: "netflixgpt-f329a.firebaseapp.com",
  projectId: "netflixgpt-f329a",
  storageBucket: "netflixgpt-f329a.firebasestorage.app",
  messagingSenderId: "271945491516",
  appId: "1:271945491516:web:4f8325d125a35b55e08f39",
  measurementId: "G-NF9H8CE3ES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
