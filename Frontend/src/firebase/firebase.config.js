// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDCP4U1poO48yiOFI-h7Hvr5W_QlZsIw7U",
  authDomain: "ecom-c75b8.firebaseapp.com",
  projectId: "ecom-c75b8",
  storageBucket: "ecom-c75b8.appspot.com",
  messagingSenderId: "13281146915",
  appId: "1:13281146915:web:240b77ce90c4acdc061996",
  measurementId: "G-H0ESKN28L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;