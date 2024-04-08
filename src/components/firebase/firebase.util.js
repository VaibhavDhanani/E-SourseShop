import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyBOeGmBo9KjlDbW2XFBaicjo4Du7-kCnX8",
  authDomain: "e-sourseshop.firebaseapp.com",
  projectId: "e-sourseshop",
  storageBucket: "e-sourseshop.appspot.com",
  messagingSenderId: "272211496792",
  appId: "1:272211496792:web:c48ac67d2b1102ba669f2d",
  measurementId: "G-0P03H7XX4W",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);


const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const firestore = getFirestore();
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  // console.log(userRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, { displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userRef; 
};


export { auth, firestore, signInWithGoogle, createUserProfileDocument };
export default firebase;
