// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAr2aApjyLC7sg8pLET0ePdsJSiGL6TLZw",
    authDomain: "fir-with-dotnet.firebaseapp.com",
    databaseURL: "https://firebase-with-dotnet-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firebase-with-dotnet",
    storageBucket: "firebase-with-dotnet.appspot.com",
    messagingSenderId: "39716696512",
    appId: "1:39716696512:web:da9a12a5e31ae3a4ae5825",
    measurementId: "G-6DRKBNE6KG"
  };
  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
