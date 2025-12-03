import { defineStore } from "pinia"
import { ref } from "vue"
import { watchAuth, logoutUser } from "@/lib/firebase/auth"
import { getUserProfile } from "@/lib/firebase/db"
import { useRouter } from "vue-router"

export const useAuthStore = defineStore("auth", () => {
  // Firebase user object (contains email, uid)
  const user = ref(null)

  // Vue Router instance
  const router = useRouter()

  // Firestore user profile (name, created_at, etc)
  const profile = ref(null)

  // Firebase auth listener
  watchAuth(async (firebaseUser) => {
    user.value = firebaseUser

    if (firebaseUser) {
      // Load profile from Firestore
      profile.value = await getUserProfile(firebaseUser.uid)
    } else {
      profile.value = null
    }
  })

  // Logout
  async function logout() {
    await logoutUser()
    user.value = null
    profile.value = null

    router.push("/login")  
  }

  return {
    user,
    profile,
    logout,
  }
})
