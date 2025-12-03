<!-- File: src/components/layout/HeaderBar.vue -->
<script setup>
import { computed, ref } from "vue"
import { useAuthStore } from "@/stores/auth"

const auth = useAuthStore()

// Dropdown
const isDropdownOpen = ref(false)
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Computed user name (from Firestore profile)
const userName = computed(() => {
  return auth.profile?.name || "User"
})

// Auto initial from name (e.g., Mak → M)
const userInitial = computed(() => {
  return userName.value.charAt(0).toUpperCase()
})

const logout = () => {
  auth.logout()
}


</script>


<template>
  <header
    class="h-16 flex items-center justify-between bg-white dark:bg-gray-800 
           shadow-sm sticky top-0 z-10 px-6 transition"
  >
    <!-- Welcome User -->
    <div class="text-xl font-semibold text-gray-700 dark:text-gray-200">
      Welcome back, {{ userName }}
    </div>

    <div class="flex items-center">

      <!-- Profile Dropdown -->
      <div class="relative ml-4">
        <button
          @click="toggleDropdown"
          class="flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full
                  bg-gray-800 dark:bg-gray-600 text-white font-bold text-sm"
          >
            {{ userInitial }}
          </div>
        </button>

        <div
          v-if="isDropdownOpen"
          @click.away="isDropdownOpen = false"
          class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700
                 rounded-lg shadow-xl py-2 z-30 transition"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200
                   hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            Profile
          </a>

          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200
                   hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            Settings
          </a>

          <hr class="my-1 border-gray-200 dark:border-gray-600">

          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400
                   hover:bg-red-50 dark:hover:bg-gray-600 transition"
          >
            Sign Out
          </button>
        </div>
      </div>

    </div>

  </header>
</template>

