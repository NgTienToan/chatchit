import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpQ6ueJJMXNZhTjsiLSXrpxZqAQq67PCc",
  authDomain: "chatchit-b57d5.firebaseapp.com",
  projectId: "chatchit-b57d5",
  storageBucket: "chatchit-b57d5.appspot.com",
  messagingSenderId: "892187896567",
  appId: "1:892187896567:web:0cb4fcbcbe743c1ed541f2",
  measurementId: "G-6385PLX4XF"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);