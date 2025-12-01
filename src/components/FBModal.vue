<!-- File: src/components/FBModal.vue -->
<template>
  <div
    v-show="show"
    class="fixed inset-0 z-[9999] flex items-center justify-center
           bg-gray-900/60 dark:bg-gray-900/80 backdrop-blur-sm transition"
  >
    <div
      class="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 
             rounded-lg shadow-xl transition"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b pb-4 mb-6 
                  border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100">
          {{ title }}
        </h3>

        <button
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-600 dark:text-gray-500 
                 dark:hover:text-gray-300 transition"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="space-y-4 text-gray-700 dark:text-gray-200">
        <slot />
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end space-x-2">
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 
                 text-gray-800 dark:text-gray-200 
                 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Cancel
        </button>

        <button
          @click="$emit('confirm')"
          class="px-4 py-2 bg-gray-800 text-white 
                 dark:bg-gray-600 dark:text-gray-200 
                 rounded hover:bg-gray-900 dark:hover:bg-gray-500 transition"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FBModal",
  props: {
    show: Boolean,
    title: String
  }
}
</script>
