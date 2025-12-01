//File: src/main.js

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import "flowbite"

// Pinia (global store)
import { createPinia } from "pinia"

// Theme store
import { useThemeStore } from "@/stores/theme"

// IndexedDB initialization
import { initDatabase } from "./db/db_migrations"

async function bootstrap() {
  await initDatabase() // Ensure DB is ready

  const app = createApp(App)
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)

  // Now that pinia is loaded, activate saved theme
  const theme = useThemeStore()
  theme.setTheme(theme.theme)

  app.mount("#app")
}

bootstrap()
