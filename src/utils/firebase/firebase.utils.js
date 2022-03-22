import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaZVT-XY3bheRp8L_2vdW65H7zwmRoyTY",
  authDomain: "crwn-db-4bf9d.firebaseapp.com",
  projectId: "crwn-db-4bf9d",
  storageBucket: "crwn-db-4bf9d.appspot.com",
  messagingSenderId: "320181890834",
  appId: "1:320181890834:web:364582cce74a25e7ea4dcb",
  measurementId: "G-Y2KWJ9MRBJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());


};
