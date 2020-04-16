/* eslint-disable */
import firebaseConfing from "@/config/firebase";
import firebase, { User } from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(firebaseConfing);
const auth = app.auth();

export default class Auth {
  static isLoggedIn(): boolean {
    if (auth.currentUser) {
      console.log("there is user")
      return true;
    }
    console.log("there is no user")
    return false;
  }

  static signup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  static login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return auth.signInWithEmailAndPassword(email, password)
  }

  static logout(): Promise<void> {
    return auth.signOut();
  }
}