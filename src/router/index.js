// File: src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import ProductsView from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: 'Dashboard Home' },
    },
    {
      path: '/products',
      name: 'products',
      component: () => ProductsView,
      meta: { title: 'Products List' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { layout: 'Blank' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { layout: 'Blank' },
    }
  ],
})

export default router

router.beforeEach((to, from, next) => {
  const appName = import.meta.env.VITE_APP_NAME || 'App'

  if (to.meta.title) {
    document.title = `${appName} - ${to.meta.title}`
  } else {
    document.title = appName
  }

  next()
})

