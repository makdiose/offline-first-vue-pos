<!-- File: src/views/Dashboard.vue -->
<template>
  <div class="p-6 space-y-10">

    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
      Dashboard
    </h1>

    <!-- Metric Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">

      <div class="card">
        <p class="text-gray-600 dark:text-gray-400">Sales Today</p>
        <p class="text-3xl font-extrabold mt-1 text-gray-900 dark:text-gray-100">₱0</p>
      </div>

      <div class="card">
        <p class="text-gray-600 dark:text-gray-400">Orders Today</p>
        <p class="text-3xl font-extrabold mt-1 text-gray-900 dark:text-gray-100">0</p>
      </div>

      <div class="card">
        <p class="text-gray-600 dark:text-gray-400">Active Customers</p>
        <p class="text-3xl font-extrabold mt-1 text-gray-900 dark:text-gray-100">0</p>
      </div>

      <div class="card">
        <p class="text-gray-600 dark:text-gray-400">Pending Orders</p>
        <p class="text-3xl font-extrabold mt-1 text-gray-900 dark:text-gray-100">0</p>
      </div>

    </div>

    <!-- Chart Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div class="card h-64">
        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Sales Trend</h3>
        <div class="placeholder-block"></div>
      </div>

      <div class="card h-64">
        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Top Selling Products</h3>
        <div class="placeholder-block"></div>
      </div>

    </div>

    <!-- Orders + Low Stock Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div class="section">
        <h3 class="section-title text-gray-900 dark:text-gray-100">Recent Orders</h3>
        <div class="card">
          <div class="placeholder-block"></div>
        </div>
      </div>

      <div class="section">
        <h3 class="section-title text-gray-900 dark:text-gray-100">Low Stock Alerts</h3>
        <div class="card">
          <div class="placeholder-block"></div>
        </div>
      </div>

    </div>

    <!-- Quick Actions -->
    <div class="section">
      <h3 class="section-title text-gray-900 dark:text-gray-100">Quick Actions</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

        <button class="card text-left hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
          <p class="font-semibold text-gray-900 dark:text-gray-100">Add New Product</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Create product fast</p>
        </button>

        <button class="card text-left hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
          <p class="font-semibold text-gray-900 dark:text-gray-100">Record Expense</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Add cost for tracking</p>
        </button>

        <button class="card text-left hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
          <p class="font-semibold text-gray-900 dark:text-gray-100">Create Order</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Start an order</p>
        </button>

      </div>
    </div>

  </div>
</template>


<script> 

export default {
  name: "DashboardView"
}
</script>
