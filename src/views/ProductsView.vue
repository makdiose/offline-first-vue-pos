<!-- File: src/views/ProductsView.vue -->
<template>
  <div class="p-6 space-y-10">

    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
      Products
    </h1>

    <!-- Top Bar (Add Button) -->
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Product List
      </h2>

      <button
        @click="openAdd()"
        class="text-black bg-gray-300 hover:bg-gray-500 
               font-medium rounded-lg text-sm px-5 py-2.5
               dark:bg-gray-600 dark:hover:bg-gray-500 
               dark:text-gray-200"
      >
        Add Product
      </button>
    </div>

    <!-- Table Section -->
    <div class="card shadow-md">
      <div class="overflow-x-auto rounded-lg">
        <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">

          <thead class="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Slug</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="product in products"
              :key="product.id"
              class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 
                     hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <td class="px-6 py-4">{{ product.id }}</td>
              <td class="px-6 py-4">{{ product.name }}</td>
              <td class="px-6 py-4">{{ product.price }}</td>
              <td class="px-6 py-4">{{ product.slug }}</td>
              <td class="px-6 py-4 flex gap-3">

                <!-- Edit -->
                <button
                  @click="openEdit(product)"
                  class="px-3 py-1 text-sm rounded
                        bg-gray-200 hover:bg-gray-300
                        dark:bg-gray-700 dark:hover:bg-gray-600
                        text-gray-800 dark:text-gray-100"
                >
                  Edit
                </button>

                <!-- Delete -->
                <button
                  @click="openDelete(product)"
                  class="px-3 py-1 text-sm rounded
                        bg-gray-200 hover:bg-gray-300
                        dark:bg-gray-700 dark:hover:bg-gray-600
                        text-gray-800 dark:text-gray-100"
                >
                  Delete
                </button>

              </td>


            </tr>

            <!-- No products -->
            <tr v-if="products.length === 0">
              <td colspan="4" class="text-center py-4 text-gray-400 dark:text-gray-500">
                No products found
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>

 

  </div>
     <!-- Add Product Modal -->
    <FBModal
      :show="showAddModal"
      title="Add New Product"
      @close="closeModal"
      @confirm="saveProduct"
    >
      <div class="space-y-4">

        <!-- Name -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <input
            v-model="form.name"
            type="text"
            class="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-gray-100 text-sm rounded-lg
                   focus:ring-gray-500 focus:border-gray-500 
                   block w-full px-3 py-2"
          >
          <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
        </div>

        <!-- Price -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Price
          </label>
          <input
            v-model="form.price"
            type="number"
            class="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-gray-100 text-sm rounded-lg
                   focus:ring-gray-500 focus:border-gray-500 
                   block w-full px-3 py-2"
          >
          <p v-if="errors.price" class="mt-1 text-sm text-red-600">{{ errors.price }}</p>
        </div>

        <!-- Description -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            v-model="form.description"
            rows="3"
            class="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-gray-100 text-sm rounded-lg
                   focus:ring-gray-500 focus:border-gray-500 
                   block w-full px-3 py-2"
          ></textarea>
        </div>

      </div>
      
  <template #footer>
    <button
      @click="closeModal"
      class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      Cancel
    </button>

    <button
      @click="saveProduct"
      class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      Save
    </button>
  </template>
    </FBModal>

    <!-- Delete Product Modal -->
<FBModal
  :show="showDeleteModal"
  title="Confirm Delete"
  @close="closeModal"
  @confirm="deleteProductConfirm"
>
  <p class="text-gray-800 dark:text-gray-200">
    Are you sure you want to delete
    <strong>{{ selectedProduct?.name }}</strong>?
  </p>

    <template #footer>
    <button
      @click="closeModal"
      class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      Cancel
    </button>

    <button
      @click="deleteProductConfirm"
      class="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
    >
      Yes, Delete
    </button>
  </template>
</FBModal>

<!-- Edit Product Modal -->
<FBModal
  :show="showEditModal"
  title="Edit Product"
  @close="closeModal"
  @confirm="updateProductConfirm"
>
  <div class="space-y-4">

    <!-- Name -->
    <div>
      <label class="block mb-1 text-sm font-medium
                     text-gray-700 dark:text-gray-300">
        Product Name
      </label>

      <input
        v-model="form.name"
        type="text"
        class="w-full px-3 py-2 text-sm rounded-lg
               bg-gray-50 dark:bg-gray-800
               border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100
               focus:ring-gray-500 focus:border-gray-500"
      >

      <p v-if="errors.name" class="mt-1 text-sm text-red-600">
        {{ errors.name }}
      </p>
    </div>

    <!-- Price -->
    <div>
      <label class="block mb-1 text-sm font-medium
                     text-gray-700 dark:text-gray-300">
        Price
      </label>

      <input
        v-model="form.price"
        type="number"
        class="w-full px-3 py-2 text-sm rounded-lg
               bg-gray-50 dark:bg-gray-800
               border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100
               focus:ring-gray-500 focus:border-gray-500"
      >

      <p v-if="errors.price" class="mt-1 text-sm text-red-600">
        {{ errors.price }}
      </p>
    </div>

    <!-- Description -->
    <div>
      <label class="block mb-1 text-sm font-medium
                     text-gray-700 dark:text-gray-300">
        Description
      </label>

      <textarea
        v-model="form.description"
        rows="3"
        class="w-full px-3 py-2 text-sm rounded-lg
               bg-gray-50 dark:bg-gray-800
               border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100
               focus:ring-gray-500 focus:border-gray-500"
      ></textarea>
    </div>

  </div>
   <template #footer>
    <button
      @click="closeModal"
      class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      Cancel
    </button>

    <button
      @click="updateProductConfirm"
      class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
    >
      Update
    </button>
  </template>
</FBModal>

</template>

<script>
import FBModal from "@/components/FBModal.vue"
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from "@/services/productService"

import { z } from "zod"

const ProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.coerce.number().min(1, "Price is required"),
  description: z.string().optional()
})

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
      showEditModal: false,
      showDeleteModal: false,

      selectedProduct: null,

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
    this.showAddModal = false
    this.showEditModal = false
    this.showDeleteModal = false
    this.selectedProduct = null
    this.errors = {}
  },

  /* --------------------------
   ADD PRODUCT (open modal)
  ---------------------------*/
  openAdd() {
    this.selectedProduct = null

    // Reset form
    this.form = {
      name: "",
      price: "",
      description: ""
    }

    this.errors = {}

    this.showAddModal = true
  },


  /* --------------------------
     EDIT PRODUCT (open modal)
  ---------------------------*/
  openEdit(product) {
    this.selectedProduct = product

    // Populate form
    this.form = {
      name: product.name,
      price: product.price,
      description: product.description
    }

    this.showEditModal = true
  },

  async updateProductConfirm() {
    const result = ProductSchema.safeParse(this.form)

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      this.errors = Object.fromEntries(
        Object.entries(flat).map(([k, v]) => [k, v?.[0]])
      )
      return
    }

    await updateProduct(this.selectedProduct.id, {
      ...this.form
    })

    this.products = await getAllProducts()
    this.closeModal()
  },

  /* ---------------------------
     DELETE PRODUCT (open modal)
  ----------------------------*/
  openDelete(product) {
    this.selectedProduct = product
    this.showDeleteModal = true
  },

  async deleteProductConfirm() {
    await deleteProduct(this.selectedProduct.id)
    this.products = await getAllProducts()
    this.closeModal()
  },

  /* --------------------------
     SAVE NEW PRODUCT
  ---------------------------*/
  async saveProduct() {
    const result = ProductSchema.safeParse(this.form)

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      this.errors = Object.fromEntries(
        Object.entries(flat).map(([k, v]) => [k, v?.[0]])
      )
      return
    }

    const baseSlug = slugify(this.form.name)
    const salt = Math.floor(1000 + Math.random() * 9000)
    const slug = `${baseSlug}-${salt}`

    await addProduct({ ...this.form, slug })
    this.products = await getAllProducts()

    this.form = { name: "", price: "", description: "" }
    this.errors = {}
    this.showAddModal = false
  }
}

}
</script>
