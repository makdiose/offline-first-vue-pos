<template>
  <!-- 
    Blank Layout: Just centers the content (the Login/Register view) in the viewport.
    It contains no header, sidebar, or footer.
  -->
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <!-- Slot is where the <RouterView /> content (like the Login page) will be rendered -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// This layout requires no script logic.
</script>