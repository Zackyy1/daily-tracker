import { FB_GoogleProvider, auth } from "@/config/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  type User,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

export const LoginWithGoogle = () => {
  signInWithPopup(auth, FB_GoogleProvider).then((result) => {
    console.log("Yeet");
  });
};
export const onAuthChanged = (user: User) =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
