import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMLrgHGBcTJVSHL6j2Ra_9xhnSThoxxTU",
  authDomain: "coder-react-15f48.firebaseapp.com",
  projectId: "coder-react-15f48",
  storageBucket: "coder-react-15f48.appspot.com",
  messagingSenderId: "691546924996",
  appId: "1:691546924996:web:6fd8b7e5a2502ca08de691",
  measurementId: "G-RGVJPYSEEY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)