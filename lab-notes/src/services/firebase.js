import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
initializeApp(firebaseConfig);
const auth = getAuth()

export const registerUser = (email, password, user) => {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        userCredential.user.displayName= user
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
}