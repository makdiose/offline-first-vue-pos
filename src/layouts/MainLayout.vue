<!-- File: src/layouts/MainLayout.vue -->
<script setup lang="ts">
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderBar from '@/components/layout/HeaderBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors">

    <SidebarNav />

    <div class="flex flex-col flex-grow sm:ml-64 transition-all">

      <HeaderBar />

      <main class="flex-grow p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 transition-colors">
        <slot />
      </main>

      <FooterBar />
    </div>

  </div>
</template>
