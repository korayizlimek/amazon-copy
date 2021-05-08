import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoR4_x0R8URK75l-0jE0GAOV-mZaGvxsk",
  authDomain: "clone-5de09.firebaseapp.com",
  projectId: "clone-5de09",
  storageBucket: "clone-5de09.appspot.com",
  messagingSenderId: "979215985112",
  appId: "1:979215985112:web:eb522eabfe3df5b839aaad",
  measurementId: "G-6R35ENX767",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
