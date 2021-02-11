import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCm44KANNgnC2wtYVkMs0axmqgTghDxTSA",
  authDomain: "crownfeel.firebaseapp.com",
  databaseURL: "https://crownfeel-default-rtdb.firebaseio.com",
  projectId: "crownfeel",
  storageBucket: "crownfeel.appspot.com",
  messagingSenderId: "458490700092",
  appId: "1:458490700092:web:708a6fb1ea60f540dd3e39",
  measurementId: "G-DZYFB7MDY3",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
