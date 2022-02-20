import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";

export const getData = async (col) => {
     const collectionRef = collection(db, col) 
     return await getDocs(collectionRef)
}