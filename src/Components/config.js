import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyCvqSui1Ppg-8Iq-uzWuN2h3VZpUd_nsCM",

  authDomain: "gastrofinder-5893c.firebaseapp.com",

  projectId: "gastrofinder-5893c",

  storageBucket: "gastrofinder-5893c.appspot.com",

  messagingSenderId: "700953211785",

  appId: "1:700953211785:web:43459a7ecfc72a214e2758",

  measurementId: "G-3WXYTKH2VT"

};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};
