import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAnpEKLhteZUVXL99Qu5dP3NFIR757_VMk",
  authDomain: "react-firebase-2e70d.firebaseapp.com",
  databaseURL: "https://react-firebase-2e70d.firebaseio.com",
  projectId: "react-firebase-2e70d",
  storageBucket: "react-firebase-2e70d.appspot.com",
  messagingSenderId: "679928379621",
  appId: "1:679928379621:web:c5619e4587101dda113c0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {projectStorage, projectFirestore}