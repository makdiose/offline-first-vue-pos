// File: src/main.js

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import "flowbite"

import { createPinia } from "pinia"
import { useThemeStore } from "@/stores/theme"

import { initDatabase } from "./db/db_migrations"

// Listen to Firebase auth state before mounting
import { watchAuth } from "@/lib/firebase/auth"

async function bootstrap() {
  await initDatabase()

  let app       // Vue instance
  const pinia = createPinia()

  watchAuth(() => {
    // Only mount ONCE when Firebase gives us initial auth state
    if (!app) {
      app = createApp(App)

      app.use(pinia)
      app.use(router)

      // Now that Pinia is active, load saved theme
      const theme = useThemeStore()
      theme.setTheme(theme.theme)

      app.mount("#app")
    }
  })
}

bootstrap()
