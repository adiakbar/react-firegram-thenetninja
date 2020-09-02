import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDiNH58b1tkT2k2lykN9EPqI-9sIXbOmOM",
  authDomain: "modern-javascript-9ebe7.firebaseapp.com",
  databaseURL: "https://modern-javascript-9ebe7.firebaseio.com",
  projectId: "modern-javascript-9ebe7",
  storageBucket: "modern-javascript-9ebe7.appspot.com",
  messagingSenderId: "635636363880",
  appId: "1:635636363880:web:260cadede62418522581dd",
  measurementId: "G-ZG8RMSCWH4"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore}