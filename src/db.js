import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4HL3RYB84TRsjD73JO15XbXo27EuUKj4",
  authDomain: "zeta-35f1b.firebaseapp.com",
  databaseURL: "https://zeta-35f1b.firebaseio.com",
  projectId: "zeta-35f1b",
  storageBucket: "zeta-35f1b.appspot.com",
  messagingSenderId: "513019578438",
  appId: "1:513019578438:web:6ad219a20f3ece1a226247",
  measurementId: "G-WT9VX9M7NJ"
};
export const db = firebase.initializeApp(firebaseConfig).firestore
// This is not always necessary
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
