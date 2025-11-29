<!-- File: src/components/layout/HeaderBar.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const user = ref({ name: 'Alexander', initial: 'A' })
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const logout = () => {
  console.log('User logged out.')
}
</script>

<template>
  <header class="h-16 flex items-center justify-between bg-white shadow-md sticky top-0 z-10 p-4">
    <div class="text-xl font-semibold text-gray-700">
      Welcome back, {{ user.name }}
    </div>

    <div class="relative">
      <button @click="toggleDropdown" class="flex items-center p-2 rounded-full hover:bg-gray-100">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-sm">
          {{ user.initial }}
        </div>
      </button>

      <div
        v-if="isDropdownOpen"
        @click.away="isDropdownOpen = false"
        class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-30"
      >
        <a href="#" class="block px-4 py-2 text-sm hover:bg-indigo-500 hover:text-white">Profile</a>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-indigo-500 hover:text-white">Settings</a>
        <hr class="my-1" />
        <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
          Sign Out
        </button>
      </div>
    </div>
  </header>
</template>
