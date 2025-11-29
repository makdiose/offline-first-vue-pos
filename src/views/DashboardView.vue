<!-- File: src/views/Dashboard.vue -->

<template>
  <div class="p-4 border-4 border-red-500">

    <h1 class="text-4xl font-bold text-red-600 mb-4">
      DASHBOARD LOADED
    </h1>

    <h2 class="text-2xl font-bold mb-6">Dashboard Overview</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="card">
        <p class="text-light">Sales Today</p>
        <p class="text-3xl font-bold">₱0</p>
      </div>

      <div class="card">
        <p class="text-light">Orders Today</p>
        <p class="text-3xl font-bold">0</p>
      </div>

      <div class="card">
        <p class="text-light">Active Customers</p>
        <p class="text-3xl font-bold">0</p>
      </div>
    </div>

    <div class="section">
      <h3 class="section-title">Recent Orders</h3>
      <div class="card">
        <div class="placeholder-block"></div>
      </div>
    </div>

  </div>
</template>

<script> 

export default {
  name: "DashboardView"
}
</script>
