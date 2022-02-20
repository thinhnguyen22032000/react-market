import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyCZgZNnWKBatt1J6sVyzbrWGKyLihFHe2k",
    authDomain: "quanlybanhang-34c55.firebaseapp.com",
    databaseURL: "https://quanlybanhang-34c55-default-rtdb.firebaseio.com",
    projectId: "quanlybanhang-34c55",
    storageBucket: "quanlybanhang-34c55.appspot.com",
    messagingSenderId: "950153550731",
    appId: "1:950153550731:web:9bd1db1444ed66f7cf6d8e",
    measurementId: "G-EG4SXPKW41"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export {app, db}