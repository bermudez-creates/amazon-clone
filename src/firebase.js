import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeLXbkXbcWGiemLcCzpKUva42qrjQjYSo",
    authDomain: "clone-ccbf2.firebaseapp.com",
    projectId: "clone-ccbf2",
    storageBucket: "clone-ccbf2.appspot.com",
    messagingSenderId: "589201455561",
    appId: "1:589201455561:web:da35242490d7b097f11018",
    measurementId: "G-C5VGGW5R0N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

 