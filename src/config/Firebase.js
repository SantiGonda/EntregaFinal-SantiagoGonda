
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD4Xqduw8FW_0AejDoArxA3yYz0J2fai8",
  authDomain: "entregafinalreact-f0d49.firebaseapp.com",
  projectId: "entregafinalreact-f0d49",
  storageBucket: "gs://entregafinalreact-f0d49.appspot.com/cardsgeneticas",
  messagingSenderId: "1006979276939",
  appId: "1:1006979276939:web:84b586e10518d24468348e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
