import {initializeApp} from 'firebase/app'
import {initializeFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { serverTimestamp } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe1QkPnxbfN7WrfcjVGKiRsyIPBhQAtVc",
  authDomain: "tczk-90f47.firebaseapp.com",
  projectId: "tczk-90f47",
  storageBucket: "tczk-90f47.appspot.com",
  messagingSenderId: "1064829842208",
  appId: "1:1064829842208:web:d258838bc7ff425cf5dd45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth, db};