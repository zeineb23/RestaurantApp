import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmO-scx3IaBcd3FAdoKzUzd7r88biOcPM",
  authDomain: "restaurantapp-10fde.firebaseapp.com",
  projectId: "restaurantapp-10fde",
  storageBucket: "restaurantapp-10fde.appspot.com",
  messagingSenderId: "81767659633",
  appId: "1:81767659633:web:e819922700e8c7d616c3d0",
  measurementId: "G-485SP2V1B7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};
