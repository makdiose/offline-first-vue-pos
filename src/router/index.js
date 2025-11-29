// File: src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
// Note: We need to explicitly import DashboardView since it's used directly,
// but use dynamic imports for others for better performance (lazy loading).
import DashboardView from '@/views/DashboardView.vue' 

const router = createRouter({
  // Use createWebHistory for clean URLs
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    // --- MAIN APP ROUTES (Uses MainLayout by default) ---
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView, 
      // App.vue defaults to MainLayout since no 'meta: { layout: ... }' is set
    },
    {
      path: '/customers',
      name: 'customers',
      // Lazy-loading the component
      component: () => import('@/views/CustomerListView.vue'),
    },
    
    // --- AUTH ROUTES (Uses BlankLayout) ---
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      // CRITICAL: This meta tag tells App.vue to use BlankLayout
      meta: { layout: 'Blank' }, 
    },

    // Optional: Add a 404 route using BlankLayout
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { layout: 'Blank' },
    }
  ],
})

// CRITICAL FIX: This line exports the router instance as the default module export,
// satisfying the `import router from "./router"` line in main.js
export default router