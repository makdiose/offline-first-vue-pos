//File: src/lib/firebase/auth.js

import { auth } from "./index"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth"

// Register new user
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Login
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

// Logout
export function logoutUser() {
  return signOut(auth)
}

// Auth state listener (used for global state)
export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback)
}
