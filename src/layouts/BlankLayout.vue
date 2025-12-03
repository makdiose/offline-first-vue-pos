<template>
  <div class="min-h-screen flex items-center justify-center p-4 
              bg-neutral-50 dark:bg-neutral-900">
    <!-- Auth card wrapper -->
    <div class="w-full max-w-md bg-white dark:bg-neutral-800 
                border border-neutral-200 dark:border-neutral-700 
                rounded-md p-6 shadow-sm">
      <slot />
    </div>
  </div>
</template>

<script setup>
// No logic needed for a blank layout,
// keeps it clean and reusable.
</script>
