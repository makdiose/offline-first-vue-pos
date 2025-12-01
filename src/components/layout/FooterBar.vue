<!-- File: src/components/layout/FooterBar.vue -->
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

//Fetch VITE_APP_NAME in the env file
const appName = import.meta.env.VITE_APP_NAME || 'VUE POS';
</script>

<template>
  <footer
    class="h-12 flex items-center justify-between 
           bg-white dark:bg-gray-800 
           text-xs text-gray-600 dark:text-gray-300 
           px-6 border-t border-gray-200 dark:border-gray-700
           transition-colors"
  >
    <!-- Branding -->
    <p class="tracking-wide">
      &copy; {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.
    </p>

    <!-- Theme Toggle -->
    <button
      @click="theme.toggleTheme()"
      class="px-3 py-1 text-xs rounded-lg border 
            border-gray-300 dark:border-gray-600 
            bg-gray-100 dark:bg-gray-700
            text-gray-700 dark:text-gray-200
            hover:bg-gray-200 dark:hover:bg-gray-600
            transition-all"
    >
      {{ theme.theme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
    </button>

  </footer>
</template>
