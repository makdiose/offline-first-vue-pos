<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { registerUser } from "@/lib/firebase/auth"
import { createUserProfile } from "@/lib/firebase/db"
import { z } from "zod"

// Validation schema
const schema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email."),
  password: z.string().min(6, "Password must be at least 6 characters.")
})

const router = useRouter()

const form = ref({
  name: "",
  email: "",
  password: ""
})

const errors = ref([])
const loading = ref(false)

async function submit() {
  errors.value = []
  loading.value = true

  // Validate using Zod
  const result = schema.safeParse(form.value)
  if (!result.success) {
    loading.value = false
    errors.value = result.error.errors.map(e => e.message)
    return
  }

  try {
    // Register user on Firebase Auth
    const cred = await registerUser(form.value.email, form.value.password)

    // Create Firestore profile
    await createUserProfile(cred.user.uid, {
      name: form.value.name,
      email: form.value.email,
      created_at: new Date().toISOString()
    })

    // Redirect after success
    router.push("/")

  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
     errors.value.push("This email is already registered.")
    } else if (err.code === "auth/invalid-email") {
        errors.value.push("Please enter a valid email address.")
    } else if (err.code === "auth/weak-password") {
        errors.value.push("Your password is too weak. Use at least 6 characters.")
    } else {
        errors.value.push(err.message)
    }
  }

  loading.value = false
}
</script>

<template>
  <div class="max-w-md mx-auto w-full p-4 space-y-6">

    <div class="text-center space-y-1">
      <h1 class="text-2xl font-semibold">Create your account</h1>
      <p class="text-sm text-neutral-500 dark:text-neutral-400">
        Join the POS system and start managing your products.
      </p>
    </div>

    <div v-if="errors.length" class="border border-neutral-300 dark:border-neutral-700 rounded-md p-3">
      <ul class="text-sm space-y-1">
        <li v-for="e in errors" :key="e">{{ e }}</li>
      </ul>
    </div>

    <form @submit.prevent="submit" class="space-y-4">

      <div>
        <label class="block text-sm mb-1">Full Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="John Doe"
          class="w-full border border-neutral-300 dark:border-neutral-600 rounded-md p-2 bg-white dark:bg-neutral-800"
        />
      </div>

      <div>
        <label class="block text-sm mb-1">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="you@example.com"
          class="w-full border border-neutral-300 dark:border-neutral-600 rounded-md p-2 bg-white dark:bg-neutral-800"
        />
      </div>

      <div>
        <label class="block text-sm mb-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          placeholder="Your password"
          class="w-full border border-neutral-300 dark:border-neutral-600 rounded-md p-2 bg-white dark:bg-neutral-800"
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full border border-neutral-300 dark:border-neutral-600 rounded-md p-2 text-center disabled:opacity-50"
      >
        <span v-if="!loading">Register</span>
        <span v-else>Creating account…</span>
      </button>

    </form>

  </div>
</template>
