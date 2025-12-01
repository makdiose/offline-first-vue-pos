<template>
  <div>
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Products</h2>

      <!-- Add Product Button -->
      <button
        @click="showAddModal = true"
        class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Add Product
      </button>
    </div>

    <!-- Flowbite Table -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Slug
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-50"
            v-for="product in products"
            :key="product.id"
          >
            <td class="px-6 py-4">{{ product.id }}</td>
            <td class="px-6 py-4">{{ product.name }}</td>
            <td class="px-6 py-4">{{ product.price }}</td>
            <td class="px-6 py-4">{{ product.slug }}</td>
          </tr>

          <tr v-if="products.length === 0">
            <td colspan="4" class="text-center py-4 text-gray-400">
              No products found
            </td>
          </tr>
        </tbody>

      </table>
    </div>

    <!-- Flowbite Modal -->
    <!-- Add Product Modal -->
<FBModal
  :show="showAddModal"
  title="Add New Product"
  @close="closeModal"
  @confirm="saveProduct"
>
  <div class="space-y-4">

    <!-- Product Name -->
    <div>
      <label class="block mb-1 text-sm font-medium">Product Name</label>
      <input
        v-model="form.name"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
      >
      <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
    </div>

    <!-- Price -->
    <div>
      <label class="block mb-1 text-sm font-medium">Price</label>
      <input
        v-model="form.price"
        type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
      >
      <p v-if="errors.price" class="mt-1 text-sm text-red-600">{{ errors.price }}</p>
    </div>

    <!-- Description -->
    <div>
      <label class="block mb-1 text-sm font-medium">Description</label>
      <textarea
        v-model="form.description"
        rows="3"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
      ></textarea>
    </div>

  </div>
</FBModal>

  </div>
</template>

<script>
import FBModal from "@/components/FBModal.vue"
import { getAllProducts, addProduct } from "@/services/productService"
import { z } from "zod"

// Zod schema for product validation
const ProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional()
})

// Utility to generate slug
function slugify(text) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
}

export default {
  name: "ProductsView",
  components: { FBModal },

  data() {
    return {
      products: [],
      showAddModal: false,

      form: {
        name: "",
        price: "",
        description: ""
      },

      errors: {}
    }
  },

  async created() {
    this.products = await getAllProducts()
  },

  methods: {
    closeModal() {
      this.errors = {}
      this.showAddModal = false
    },

    async saveProduct() {
      const result = ProductSchema.safeParse(this.form)

      if (!result.success) {
        const flat = result.error.flatten().fieldErrors

        // Convert ["msg"] to "msg"
        this.errors = Object.fromEntries(
          Object.entries(flat).map(([key, val]) => [key, val?.[0]])
        )

        return
      }

      // Generate slug
      const baseSlug = slugify(this.form.name)
      const salt = Math.floor(1000 + Math.random() * 9000)
      const slug = `${baseSlug}-${salt}`

      await addProduct({
        ...this.form,
        slug
      })

      this.products = await getAllProducts()

      this.form = { name: "", price: "", description: "" }
      this.errors = {}
      this.showAddModal = false
    }

  }
}
</script>
