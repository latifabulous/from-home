import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCLIOC_u5yFu3c7q5iOkfbWw5HPzU2NsUQ",
  authDomain: "from-homes.firebaseapp.com",
  databaseURL: "https://from-homes.firebaseio.com",
  projectId: "from-homes",
  storageBucket: "from-homes.appspot.com",
  messagingSenderId: "523972775718",
  appId: "1:523972775718:web:57505dce0db697d3e0bbe7",
  measurementId: "G-Z2NY484V11"
};

// Initialize Firebase
firebase.initializeApp(config);

// Get a reference to the database service
export const database = firebase.database();

export default firebase;