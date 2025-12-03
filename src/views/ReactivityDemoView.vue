<!-- File: src/views/ReactivityDemoView.vue -->
<template>
  <div class="p-6 space-y-6">
    <h1 class="text-3xl font-bold">Reactivity Demo</h1>

    <!-- Pillar 1: reactive() -->
    <section>
      <h2 class="text-xl font-semibold">Pillar 1: reactive</h2>
      <p>Count: {{ state.count }}</p>
      <button class="btn btn-primary" @click="state.count++">
        Increase Count
      </button>
    </section>

    <!-- Pillar 2: ref() -->
    <section>
      <h2 class="text-xl font-semibold">Pillar 2: ref</h2>
      <p>Name: {{ name }}</p>
      <button class="btn btn-secondary" @click="name = 'Mak Diose'">
        Change Name
      </button>
    </section>

    <!-- Pillar 3: computed() -->
    <section>
      <h2 class="text-xl font-semibold">Pillar 3: computed</h2>
      <p>First Name: {{ firstName }}</p>
      <p>Last Name: {{ lastName }}</p>
      <p class="font-bold">Full Name (computed): {{ fullName }}</p>

      <button class="btn btn-info" @click="firstName = 'Big Boss'">
        Change First Name
      </button>
    </section>

  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue"

//
// Pillar 1: reactive()
// Creates a reactive object with multiple fields
//
const state = reactive({
  count: 0
})

//
// Pillar 2: ref()
// Creates reactive single values
//
const name = ref("Mak")

//
// Pillar 3: computed()
// Creates a value derived from other reactive data
//
const firstName = ref("Mak")
const lastName = ref("Diose")

const fullName = computed(() => {
  return firstName.value + " " + lastName.value
})
</script>

<style scoped>
.btn {
  padding: 8px 12px;
  border-radius: 4px;
  background: #4f46e5;
  color: white;
}
.btn-secondary {
  background: #6366f1;
}
.btn-info {
  background: #0ea5e9;
}
</style>
