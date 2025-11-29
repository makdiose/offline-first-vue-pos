<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
// Utility to get current time for the footer
const currentTime = ref(new Date());

// Simulate user data
const user = ref({ name: 'Alexander', initial: 'A' });

// Navigation links for Dashboard, Products, Settings
const navItems = [
  { name: 'Dashboard', icon: 'M4 4h16v16H4V4zm2 2v2h4V6H6zm6 0v2h4V6h-4zm-6 4v2h4v-2H6zm6 0v2h4v-2h-4zm-6 4v2h4v-2H6zm6 0v2h4v-2h-4z', path: '/' },
  { name: 'Products', icon: 'M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z', path: '/products' },
  { name: 'Settings', icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zm0-6a2 2 0 012 2v1.07a7.002 7.002 0 014.95 4.95H20a2 2 0 012 2v2a2 2 0 01-2 2h-1.07a7.002 7.002 0 01-4.95 4.95V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1.07a7.002 7.002 0 01-4.95-4.95H4a2 2 0 01-2-2v-2a2 2 0 012-2h1.07a7.002 7.002 0 014.95-4.95V4a2 2 0 012-2h2z', path: '/settings' },
];

// Footer details
const appVersion = '1.0.0';
const currentDate = computed(() => {
  return currentTime.value.toLocaleDateString('en-US', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
  });
});

// Update time every second for the footer
setInterval(() => {
  currentTime.value = new Date();
}, 1000);

// State for the user profile dropdown
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Simple log out function
const logout = () => {
  console.log('User logged out.');
  // In a real app: clear tokens, reset store, and navigate to '/login'
};
</script>

<template>
  <div class="flex h-screen bg-gray-100">

    <!-- 1. LEFT SIDEBAR MENU (Fixed) -->
    <nav class="hidden sm:flex flex-col w-64 bg-gray-800 text-white shadow-xl fixed inset-y-0 z-20">
      <div class="flex items-center justify-center h-16 bg-indigo-600 text-xl font-bold">
        CRM Nexus
      </div>
      <div class="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto">
        <RouterLink 
          v-for="item in navItems" 
          :key="item.name" 
          :to="item.path" 
          active-class="bg-indigo-700 text-white shadow-md"
          class="flex items-center px-4 py-2 rounded-lg transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
        >
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :d="item.icon"></path>
          </svg>
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>

    <!-- Main Content Area -->
    <div class="flex flex-col flex-grow ml-0 sm:ml-64 transition-all duration-300">
      
      <!-- 2. TOP MENU / HEADER (Fixed) -->
      <header class="h-16 flex items-center justify-between bg-white shadow-md sticky top-0 z-10 p-4">
        <div class="text-xl font-semibold text-gray-700">
          Welcome back, {{ user.name }}
        </div>

        <!-- User Profile Dropdown -->
        <div class="relative">
          <button 
            @click="toggleDropdown" 
            class="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition"
          >
            <div class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-sm ring-2 ring-indigo-300">
              {{ user.initial }}
            </div>
          </button>

          <!-- Dropdown Menu -->
          <div 
            v-if="isDropdownOpen" 
            @click.away="isDropdownOpen = false"
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-30 ring-1 ring-black ring-opacity-5"
          >
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-150">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-150">Settings</a>
            <hr class="my-1 border-gray-100">
            <button @click="logout" class="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-700 transition duration-150">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <!-- 3. MAIN CONTENT AREA (The Router View Slot) -->
      <main class="flex-grow p-6 overflow-y-auto">
        <!-- This is where the content of the current route (e.g., DashboardView.vue) is injected -->
        <slot></slot>
      </main>

      <!-- 4. FOOTER (Fixed Strip) -->
      <footer class="h-10 bg-gray-800 text-white text-xs flex items-center justify-between px-6 shadow-inner">
        <p>CRM Nexus v{{ appVersion }} &copy; {{ new Date().getFullYear() }}</p>
        <p>
          <span class="font-mono">{{ currentDate }}</span> | 
          <span class="font-mono">{{ currentTime.toLocaleTimeString() }}</span>
        </p>
      </footer>
    </div>
  </div>
</template>