import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBa7MR4caHI2LirmzKXIT-WQQKzSpN5Az8",
  authDomain: "doc-4pp.firebaseapp.com",
  projectId: "doc-4pp",
  storageBucket: "doc-4pp.appspot.com",
  messagingSenderId: "996978713321",
  appId: "1:996978713321:web:955f001d7e61d47d124678",
};

const db = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore();

export { db };
