import { db } from "./index"
import {
  doc,
  setDoc,
  updateDoc,
  getDoc
} from "firebase/firestore"

// Create a Firestore user profile after registration
export async function createUserProfile(uid, data) {
  return await setDoc(doc(db, "users", uid), data)
}

// Read profile (optional for dashboards)
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid))
  return snap.exists() ? snap.data() : null
}

// Update profile
export async function updateUserProfile(uid, data) {
  return updateDoc(doc(db, "users", uid), data)
}
