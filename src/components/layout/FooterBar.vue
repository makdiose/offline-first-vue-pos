<!-- File: src/components/layout/FooterBar.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const currentTime = ref(new Date())
const appVersion = '1.0.0'

const currentDate = computed(() =>
  currentTime.value.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
)

setInterval(() => {
  currentTime.value = new Date()
}, 1000)
</script>

<template>
  <footer class="h-10 bg-gray-800 text-white text-xs flex items-center justify-between px-6 shadow-inner">
    <p>CRM Nexus v{{ appVersion }} &copy; {{ new Date().getFullYear() }}</p>

    <p>
      <span class="font-mono">{{ currentDate }}</span> | 
      <span class="font-mono">{{ currentTime.toLocaleTimeString() }}</span>
    </p>
  </footer>
</template>
