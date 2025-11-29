<!-- File: src/components/layout/SidebarNav.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// Simulated user (you will replace with store later)
const user = ref({ name: 'Alexander', initial: 'A' })

// Navigation links
const navItems = [
  { name: 'Dashboard', icon: 'M4 4h16v16H4V4zm2 2v2h4V6H6zm6 0v2h4V6h-4zm-6 4v2h4v-2H6zm6 0v2h4v-2h-4zm-6 4v2h4v-2H6zm6 0v2h4v-2h-4z', path: '/' },
  { name: 'Products', icon: 'M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z', path: '/products' },
]


//Fetch VITE_APP_NAME in the env file
const appName = import.meta.env.VITE_APP_NAME || 'VUE POS';


</script>

<template>
  <!-- SIDEBAR -->
  <nav class="hidden sm:flex flex-col w-64 bg-gray-800 text-white shadow-xl fixed inset-y-0 z-20">
    <div class="flex items-center justify-center h-16 bg-indigo-600 text-xl font-bold">
    {{ appName }}
    </div>

    <div class="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto">
      <RouterLink 
        v-for="item in navItems" 
        :key="item.name" 
        :to="item.path" 
        active-class="bg-indigo-700 text-white shadow-md"
        class="flex items-center px-4 py-2 rounded-lg transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
      >
        <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path :d="item.icon"></path>
        </svg>
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
