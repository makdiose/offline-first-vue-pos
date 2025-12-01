<template>
  <div
    v-show="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="relative w-full max-w-md p-4 bg-white rounded-lg shadow"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b pb-3 mb-3">
        <h3 class="text-lg font-semibold">
          {{ title }}
        </h3>

        <button
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-600"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="space-y-3">
        <slot />
      </div>

      <!-- Footer -->
      <div class="mt-5 flex justify-end space-x-2">
        <button
          @click="$emit('close')"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Cancel
        </button>

        <button
          @click="$emit('confirm')"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
