// File: src/router/index.js

import { createRouter, createWebHistory } from "vue-router"
import { useAuthStore } from "@/stores/auth"

import DashboardView from "@/views/DashboardView.vue"
import ProductsView from "@/views/ProductsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    // PROTECTED ROUTES
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: { title: "Dashboard", layout: "Main", requiresAuth: true }
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
      meta: { title: "Products List", layout: "Main", requiresAuth: true }
    },

    // PUBLIC ROUTES
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      meta: { layout: "Blank", guestOnly: true, title: "Login" }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
      meta: { layout: "Blank", guestOnly: true, title: "Create Account" }
    },

    // NOT FOUND
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFoundView.vue"),
      meta: { layout: "Blank", title: "Not Found" }
    }
  ]
})


// GLOBAL GUARD
router.beforeEach((to) => {
  const auth = useAuthStore()

  const appName = import.meta.env.VITE_APP_NAME || "App"
  document.title = to.meta.title ? `${appName} - ${to.meta.title}` : appName

  if (to.meta.requiresAuth && !auth.user) {
    return { name: "login" }
  }

  if (auth.user && to.meta.guestOnly) {
    return { name: "dashboard" }
  }
})

export default router
