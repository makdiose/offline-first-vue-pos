<template>
  <nav class="py-4 px-6 bg-gray-100 border-b">
    <router-link to="/" class="nav-item">Dashboard</router-link>
    <router-link to="/products" class="nav-item">Products</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
.nav-item {
  font-weight: 600;
  text-decoration: none;
  color: #2c3e50;
  margin-right: 15px;
}

.nav-item.router-link-exact-active {
  color: #42b983; /* highlight active */
}
</style>
