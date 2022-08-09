import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc, getDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq7QJ02oRL1e1wnB9ZzicNYVXuTxelUTY",
    authDomain: "labo-notes-feeb6.firebaseapp.com",
    projectId: "labo-notes-feeb6",
    storageBucket: "labo-notes-feeb6.appspot.com",
    messagingSenderId: "1075178150371",
    appId: "1:1075178150371:web:eea38f65daabef9a9ea8d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

//Initialize Firestore
const db = getFirestore(app);


export const registerUser = (email, password, user) => {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        userCredential.user.displayName = user
        sendEmailVerification(auth.currentUser)
    }).catch((error) => {
        console.log(error)
    });
};

export const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

};

export const googleSingIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
};

export const logOut = () => {
    return signOut(auth)
}

export const addNote = (note) => {
    return addDoc(collection(db, 'notas'), note)
}

export const getNote = (callback) => {
    return onSnapshot(query(collection(db, 'notas')), callback)
}

export const getOneNote=(id)=>{
    return getDoc(doc(db, 'notas', id))
}

export const deleteNote = (id) => {
    const orderDocRef = doc(db, 'notas', id);
    return deleteDoc(orderDocRef);
}

export const updateNote = (id, titleModal, description) => {
    return updateDoc(doc(db, 'notas', id), {
        title: titleModal,
        containerNote: description
    })
  }