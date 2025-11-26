<template>
  <div class="h-full grid grid-cols-1 md:grid-cols-12 gap-4">

    <!-- LEFT: CATEGORIES + PRODUCTS -->
    <section class="col-span-8 flex flex-col">

      <!-- Search + Filters -->
      <div class="flex items-center gap-3 mb-4">
        <button class="p-2 rounded-full bg-white shadow hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="flex-1">
          <div class="flex items-center bg-white rounded-full shadow px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400"
              fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              placeholder="Search Product..."
              class="ml-2 flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        <button class="p-2 rounded-full bg-white shadow hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor">
            <path d="M3 8h18M6 5h12M9 2h6" />
          </svg>
        </button>
      </div>

      <!-- Category Chips -->
      <div class="flex gap-2 overflow-x-auto pb-2 mb-4">
        <button class="px-4 py-2 bg-green-600 text-white rounded-full text-sm shadow">All</button>
        <button class="px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-50">Breakfast</button>
        <button class="px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-50">Soups</button>
        <button class="px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-50">Pasta</button>
        <button class="px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-50">Main Course</button>
        <button class="px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-50">Burgers</button>
      </div>

      <!-- Product Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        <div
          v-for="n in 8"
          :key="n"
          class="bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer overflow-hidden"
        >
          <img
            src="https://placehold.co/600x400?text=Cake"
            class="w-full h-32 object-cover"
          />

          <div class="p-3 space-y-1">
            <div class="font-semibold text-sm leading-tight">Original Cheese Burger</div>
            <div class="text-xs text-gray-500">$12.99</div>

            <!-- Add line -->
            <button
              class="w-full mt-2 py-1.5 text-xs font-medium bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
            >
              Add to Dish
            </button>
          </div>
        </div>

      </div>

    </section>

    <!-- RIGHT: ORDER SUMMARY -->
    <aside class="col-span-4 bg-white rounded-xl shadow flex flex-col">

      <!-- Header -->
      <div class="p-4 border-b flex items-center justify-between">
        <div>
          <div class="text-xs text-gray-500 font-semibold">Table 4</div>
          <div class="text-sm font-medium">Floyd Miles</div>
        </div>

        <div class="flex gap-2">
          <button class="px-3 py-1 text-xs bg-gray-100 rounded-lg hover:bg-gray-200">
            Dine In
          </button>
          <button class="px-3 py-1 text-xs bg-gray-100 rounded-lg hover:bg-gray-200">
            Take Away
          </button>
          <button class="px-3 py-1 text-xs bg-gray-100 rounded-lg hover:bg-gray-200">
            Delivery
          </button>
        </div>
      </div>

      <!-- Item List -->
      <div class="flex-1 overflow-auto p-4 space-y-3">

        <div class="flex items-start justify-between bg-gray-50 p-3 rounded-xl gap-3">
          <div class="flex-1 text-sm">
            <div class="font-medium">Original Burger</div>
            <div class="text-xs text-gray-500">1x $12.99</div>
          </div>

          <!-- qty -->
          <div class="flex items-center gap-1">
            <button class="h-6 w-6 flex items-center justify-center border rounded">−</button>
            <span class="w-6 text-center">1</span>
            <button class="h-6 w-6 flex items-center justify-center border rounded">+</button>
          </div>

          <!-- price -->
          <div class="font-semibold text-sm">$12.99</div>
        </div>

      </div>

      <!-- Totals -->
      <div class="border-t p-4 space-y-2">

        <div class="flex justify-between text-xs text-gray-500">
          <span>Sub Total</span>
          <span>$61.96</span>
        </div>

        <div class="flex justify-between text-xs text-gray-500">
          <span>Tax 5%</span>
          <span>$1.75</span>
        </div>

        <hr />

        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold">Total Amount</span>
          <span class="text-xl font-bold">$63.71</span>
        </div>

        <!-- Payment buttons -->
        <div class="grid grid-cols-3 gap-2 mt-2">
          <button class="border rounded-lg p-3 hover:bg-gray-50 text-sm flex flex-col items-center gap-1">
            💵 <span>Cash</span>
          </button>
          <button class="border rounded-lg p-3 hover:bg-gray-50 text-sm flex flex-col items-center gap-1">
            💳 <span>Card</span>
          </button>
          <button class="border rounded-lg p-3 hover:bg-gray-50 text-sm flex flex-col items-center gap-1">
            🔲 <span>QR</span>
          </button>
        </div>

        <!-- Place Order -->
        <button class="w-full mt-3 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg">
          Place Order
        </button>

      </div>

    </aside>

  </div>
</template>
