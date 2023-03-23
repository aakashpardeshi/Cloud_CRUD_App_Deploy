import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import "firebase/auth"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMXtahEuN5zYMFfmFAV5yTv7py7-x1_2Q",
    authDomain: "fir-crud-app-3998d.firebaseapp.com",
    projectId: "fir-crud-app-3998d",
    storageBucket: "fir-crud-app-3998d.appspot.com",
    messagingSenderId: "897669533578",
    appId: "1:897669533578:web:bd933e92671edb24c20273",
    measurementId: "G-WGFMP4TQB1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);