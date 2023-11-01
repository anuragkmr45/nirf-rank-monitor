import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDDADGOWRfVM2MkDNFOsxj_98ZOguPdAFU",
    authDomain: "lazyloading-6d186.firebaseapp.com",
    projectId: "lazyloading-6d186",
    storageBucket: "lazyloading-6d186.appspot.com",
    messagingSenderId: "736768775648",
    appId: "1:736768775648:web:6103ca52b7335cb45e8785",
    measurementId: "G-WK1HD4T9WE"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };