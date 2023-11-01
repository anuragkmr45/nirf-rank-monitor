// firestore.js
import { createContext, useContext, useState } from "react";
import { db } from "../config/firestoreConfig";
import {
    collection,
    doc,
    setDoc,
    getDocs,
} from "firebase/firestore";

const FirestoreContext = createContext();

export function useFirestore() {
    return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const createCollectionAndDocument = async (collectionName, documentID, data) => {
        try {
            const docRef = doc(collection(db, collectionName), documentID);
            await setDoc(docRef, data);

            setLoading(false)
        } catch (error) {
            console.error("Error creating collection and document:", error);
        }
    };

    const fetchCollection = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const collectionData = [];

            for (const doc of querySnapshot.docs) {
                const mainDocData = {
                    id: doc.id,
                    ...doc.data(),
                    subdocuments: [],
                };

                collectionData.push(mainDocData);
            }

            setData(collectionData)
            setLoading(false)
            // return collectionData;
        } catch (error) {
            console.error("Error fetching collection from Firestore:", error);
            throw error;
        }
    }


    const value = {
        data,
        loading,
        createCollectionAndDocument,
        fetchCollection
    };

    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    );
}