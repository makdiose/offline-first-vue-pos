<template>
  <POSLayout>
    <div class="p-4">
      <h1 class="text-xl font-bold">Vue POS</h1>
      <p class="mt-2 text-gray-600">Your POS app is now running with Tailwind.</p>
    </div>
  </POSLayout>
</template>

<script>
import POSLayout from "./components/POSLayout.vue"

export default {
  name: "App",
  components: {
    POSLayout
  }
}
</script>
