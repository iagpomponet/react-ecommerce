import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBln6q6kZzHF0GCjrxXZ_JosJ96nhVTWaE",
  authDomain: "crwndb-af2f5.firebaseapp.com",
  databaseURL: "https://crwndb-af2f5.firebaseio.com",
  projectId: "crwndb-af2f5",
  storageBucket: "crwndb-af2f5.appspot.com",
  messagingSenderId: "675798424947",
  appId: "1:675798424947:web:cbfeabf2030f2ce2c0f906",
  measurementId: "G-6VNJQPXX4Q"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;