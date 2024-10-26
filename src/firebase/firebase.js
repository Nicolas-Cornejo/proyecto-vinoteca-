// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch,
    } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI5pVKZE1Jow1f-4IbErj-X_EHSMEVWvY",
    authDomain: "proyecto-vinoteca.firebaseapp.com",
    projectId: "proyecto-vinoteca",
    storageBucket: "proyecto-vinoteca.appspot.com",
    messagingSenderId: "677342099496",
    appId: "1:677342099496:web:e7318c92b0e47d17ff5d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener un producto
export async function getSingleProduct(id) {
    const documentRef = doc(db, 'products', id);

    try {
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) {
        return snapshot.data();
    } else {}
    } catch {}
}

//obtener toda una coleccion
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
            return {
            id: docu.id,
            ...docu.data(),
            };
        });
        return productsList;
        } else {
        console.log('Coleccion vacía !');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
    }