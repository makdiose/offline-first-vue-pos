//File: src/db/db_migrations.js
import { db } from "./db"

// Version 1: initial MyPOS schema
db.version(1).stores({

  // Products table
  // ++id means auto increment primary key
  products: `
    ++id,
    category_id,
    name,
    description,
    image,
    price,
    slug,
    created_at,
    updated_at
  `,

  // Categories table
  categories: `
    ++id,
    name,
    description,
    slug,
    created_at,
    updated_at
  `,

  // Users table
  users: `
    ++id,
    name,
    email,
    created_at,
    updated_at
  `
})

// Opens the database with migrations applied
export async function initDatabase() {
  try {
    await db.open()
    console.log("MyPOS IndexedDB ready")
  } catch (error) {
    console.error("MyPOS DB failed to open", error)
  }
}
