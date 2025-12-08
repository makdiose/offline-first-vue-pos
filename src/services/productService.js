//File: src/services/productService.js

import { db } from "@/db/db"

// Fetch all products sorted newest first
export async function getAllProducts() {
  return await db.products.orderBy("id").reverse().toArray()
}


// Add a product
export async function addProduct(product) {
  return await db.products.add(product)
}

// Update a product
export async function updateProduct(id, updates) {
  return await db.products.update(id, updates)
}

// Delete a product
export async function deleteProduct(id) {
  return await db.products.delete(id)
}
