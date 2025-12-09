<!-- File: src/views/ProductsView.vue -->
<template>
  <div class="p-6 space-y-10">


    <!-- Top Bar (Add Button) -->
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Products
      </h1>

      <button
        @click="openAdd()"
        class="flex items-center gap-2 px-4 py-2 text-sm font-medium 
              text-white bg-blue-600 hover:bg-blue-700 
              rounded-lg shadow focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 4v16m8-8H4" />
        </svg>
        Add Product
      </button>
    </div>

    <!-- Table Section -->
    <div class="card shadow-md">
      <div class="overflow-x-auto rounded-lg">

        <!-- Search Bar -->
        <div class="flex mb-4">
          <input
            v-model="search"
            type="text"
            placeholder="Search by name, description or price..."
            class="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 
                  bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
                  focus:ring-gray-500 focus:border-gray-500"
          >
        </div>

        <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">

          <thead class="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3">Image</th>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Slug</th>
              <th scope="col" class="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="product in filteredProducts"
              :key="product.id"
              class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 
                     "
            >
            
            <td class="px-6 py-4">
              <img
                :src="product.image ? product.image : '/no-image.png'"
                class="h-20 rounded object-cover border dark:border-gray-700"
              >
            </td>

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

        <div class="text-center py-6" v-if="limit < products.length">
  <button
    @click="limit += 10"
    class="px-5 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300
           dark:hover:bg-gray-600 rounded-lg text-sm"
  >
    Load More
  </button>
</div>

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

<!-- Product Image -->
<div>
  <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
    Product Image
  </label>

  <!-- Image Preview Box -->
  <div class="relative w-28 h-28 rounded-lg border dark:border-gray-700 overflow-hidden">

    <!-- Loading Text -->
    <div
      v-if="isConvertingImage"
      class="absolute inset-0 flex items-center justify-center
             bg-black bg-opacity-40 z-30 text-white text-xs font-medium"
    >
      Loading...
    </div>

    <!-- Image -->
    <img
      v-if="form.image"
      :src="form.image"
      class="w-full h-full object-cover absolute inset-0"
    >

    <!-- Placeholder -->
    <div v-else class="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
  </div>

  <!-- Button -->
  <label
    for="productImageAdd"
    class="mt-2 inline-block px-3 py-2 bg-gray-200 dark:bg-gray-700
           rounded-lg text-sm cursor-pointer hover:bg-gray-300
           dark:hover:bg-gray-600"
  >
    Choose Image
  </label>

  <input id="productImageAdd"
         type="file"
         class="hidden"
         accept="image/*"
         @change="handleImageUpload">
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

<!-- Product Image -->
<div>
  <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
    Product Image
  </label>

  <!-- Image Preview Box -->
  <div class="relative w-28 h-28 rounded-lg border dark:border-gray-700 overflow-hidden">

    <!-- Loading Text -->
    <div
      v-if="isConvertingImage"
      class="absolute inset-0 flex items-center justify-center
             bg-black bg-opacity-40 z-30 text-white text-xs font-medium"
    >
      Loading...
    </div>

    <!-- Image -->
    <img
      v-if="form.image"
      :src="form.image"
      class="w-full h-full object-cover absolute inset-0"
    >

    <!-- Placeholder -->
    <div v-else class="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
  </div>

  <!-- Button -->
  <label for="productImageEdit"
         class="mt-2 inline-block px-3 py-2 bg-gray-200 dark:bg-gray-700
                rounded-lg text-sm cursor-pointer hover:bg-gray-300
                dark:hover:bg-gray-600"
  >
    Choose Image
  </label>

  <input id="productImageEdit"
         type="file"
         class="hidden"
         accept="image/*"
         @change="handleImageUpload">
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
import heic2any from "heic2any"

import * as FlowbiteVue from "flowbite-vue";
import { FwbButton } from "flowbite-vue"
import { 
  FwbAccordion, 
  FwbAccordionPanel, 
  FwbAccordionHeader, 
  FwbAccordionContent 
} from "flowbite-vue";


console.log("FlowbiteVue = ", FlowbiteVue);



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
  components: { 
    FBModal,
    FwbButton,
    FwbAccordion,
    FwbAccordionPanel,
    FwbAccordionHeader,
    FwbAccordionContent
   },

  data() {
    return {
      open1: false,
      products: [],
         limit: 2,
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,

      selectedProduct: null,

      isConvertingImage: false,
      search: "",

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
    this.isConvertingImage = false

  },


  /* --------------------------
     EDIT PRODUCT (open modal)
  ---------------------------*/
  openEdit(product) {
      this.selectedProduct = product

      this.form = {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image ?? ""
      }

      this.showEditModal = true
      this.isConvertingImage = false

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
  },

  async resizeToSquare300(file) {
    return new Promise(resolve => {
      const img = new Image()
      img.onload = () => {
        const size = 300     // final width and height
        const canvas = document.createElement("canvas")
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d")

        const minSide = Math.min(img.width, img.height)
        const sx = (img.width - minSide) / 2
        const sy = (img.height - minSide) / 2

        ctx.drawImage(
          img,
          sx, sy, minSide, minSide,
          0, 0, size, size
        )

        resolve(canvas.toDataURL("image/jpeg", 0.85))
      }

      const reader = new FileReader()
      reader.onload = e => {
        img.src = e.target.result
      }
      reader.readAsDataURL(file)
    })
  },
  async handleImageUpload(event) {
    const file = event.target.files[0]
    if (!file) return

    this.isConvertingImage = true   // start spinner

    let processedFile = file

    const isHeic =
      file.type === "image/heic" ||
      file.type === "image/heif" ||
      file.name.toLowerCase().endsWith(".heic")

    if (isHeic) {
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9
        })

        processedFile = new File([convertedBlob], file.name.replace(".heic", ".jpg"), {
          type: "image/jpeg"
        })
      } catch (error) {
        console.error("HEIC conversion failed", error)
        alert("Unable to process HEIC image.")
        this.isConvertingImage = false
        return
      }
    }

    // resize final output
    this.form.image = await this.resizeToSquare300(processedFile)

    this.isConvertingImage = false   // spinner done
  }




  
},
computed: {
  filteredProducts() {
    const term = this.search.toLowerCase().trim()
    let list = this.products

    if (term) {
      list = list.filter(p => {
        return (
          p.name?.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term) ||
          String(p.price).includes(term)
        )
      })
    }

    return list.slice(0, this.limit)
  }

},
watch: {
  search() {
    this.limit = 10
  }
}



}
</script>
