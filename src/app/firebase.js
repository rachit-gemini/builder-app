// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXfT1oRdGHSmayGnjq2SBI_ifm2zJW-c8",
  authDomain: "builder-project-a3112.firebaseapp.com",
  projectId: "builder-project-a3112",
  storageBucket: "builder-project-a3112.appspot.com",
  messagingSenderId: "396983008948",
  appId: "1:396983008948:web:080624d3c091012652a1e1",
  measurementId: "G-0XDD4F52YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);