//File: src/main.js

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import "flowbite"


// Import and initialize IndexedDB
import { initDatabase } from "./db/db_migrations"

async function bootstrap() {
  await initDatabase()  // Ensures DB is ready before app runs

  const app = createApp(App)
  app.use(router)
  app.mount("#app")
}

bootstrap()
