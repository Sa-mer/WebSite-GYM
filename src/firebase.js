import firebase from "firebase";
const  firebaseConfig = {
    apiKey: "AIzaSyCxWkXQ7ecaTJdkPoCyfBpUnS3SOK0-Ulo",
    authDomain: "gym-site-d7b0b.firebaseapp.com",
    projectId: "gym-site-d7b0b",
    storageBucket: "gym-site-d7b0b.appspot.com",
    messagingSenderId: "43177074666",
    appId: "1:43177074666:web:805d6c02398ea840439c93",
    measurementId: "G-V4KNZ0ZPE0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;