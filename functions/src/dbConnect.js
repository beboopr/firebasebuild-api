import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";

import  ServiceAccount  from "../secretes.js";

export function dbConnect(){
    if(!getApps().length) {
        initializeApp({
            credential: cert(ServiceAccount)
        })
    }
    return getFirestore()
}