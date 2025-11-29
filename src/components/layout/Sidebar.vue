<template>
  <aside class="w-60 bg-white border-r px-4 py-6">

    <nav class="space-y-1">
      
      <router-link 
        to="/" 
        class="block px-3 py-2 hover:bg-gray-100 rounded-lg"
        :class="{ 'sidebar-active': $route.name === 'dashboard' }"
      >
        Dashboard
      </router-link>

      <router-link 
        to="/products"
        class="block px-3 py-2 hover:bg-gray-100 rounded-lg"
        :class="{ 'sidebar-active': $route.name === 'products' }"
      >
        Products
      </router-link>

      <router-link 
        to="/settings"
        class="block px-3 py-2 hover:bg-gray-100 rounded-lg"
        :class="{ 'sidebar-active': $route.name === 'settings' }"
      >
        Settings
      </router-link>

    </nav>

  </aside>
</template>

<script>
export default { name: "SidebarComponent" }
</script>
