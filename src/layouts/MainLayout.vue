<!-- File: src/layouts/MainLayout.vue -->
<script setup lang="ts">
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderBar from '@/components/layout/HeaderBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <SidebarNav />

    <div class="flex flex-col flex-grow ml-0 sm:ml-64 transition-all duration-300">
      <HeaderBar />

      <main class="flex-grow p-6 overflow-y-auto">
        <slot />
      </main>

      <FooterBar />
    </div>
  </div>
</template>
