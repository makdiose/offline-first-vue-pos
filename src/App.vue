<!-- File: src/App.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { layouts } from '@/layouts';

const route = useRoute();

const currentLayout = computed(() => {
  const name = route.meta.layout as keyof typeof layouts;
  return layouts[name] || layouts.Main;
});
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

