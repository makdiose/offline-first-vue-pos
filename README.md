# Offline-First Vue POS  
*A modern study into building fast, reliable, offline-ready web applications.*

## Overview  
This project is an ongoing exploration into building a point-of-sale (POS) system using **Vue 3**, **Vite**, **Dexie.js**, and an **offline-first architecture**.  
The goal is to understand how modern front-end tools, client-side databases, and progressive enhancements can work together to create a POS experience that performs well even without a network connection.

Although it began as an exploratory idea, the codebase is steadily evolving into a structured application with room to expand into inventory, reporting, and sales modules.

---

## Key Features  

### Vue 3 + Vite  
A fast, modular, and modern front-end stack.  
- Component-based views  
- Reactive Composition API  
- Instant hot-reload  

### Offline-First Architecture  
Reliable even without internet access.  
- Powered by **Dexie.js** (IndexedDB)  
- Local-first CRUD  
- Base structure ready for sync logic in the future  

### POS-Ready Components  
- Product listing  
- Category listing  
- Add/Edit modals  
- Reusable form and layout components  
- Neutral Tailwind/Flowbite styling with dark/light mode  

### Clean and Maintainable Structure  
- Organized `/views`, `/components`, `/services`  
- Modular Dexie migrations  
- Clear naming conventions  

---

## Tech Stack  

**Frontend:**  
- Vue 3  
- Vite  
- Pinia (state management)  
- Dexie.js  
- Flowbite + TailwindCSS  

**Tooling:**  
- ESLint  
- Prettier  

---

## Getting Started  

### Install dependen

npm install

### Run development server  

npm run dev

### Build for production  

npm run build


---

## Folder Structure  

src/

assets/

components/

db/

router/

services/

views/

main.js

---

## Project Direction  

This repository serves two main purposes:

### 1. A living portfolio piece  
It showcases modern front-end practice and your growth as a developer.  
The project demonstrates real-world architecture, component design, and offline-first logic.

### 2. A foundation for a future complete POS system  
The app structure is designed to grow into:  
- Inventory management  
- Sales and reporting  
- Customer records  
- Thermal printing support  
- Multi-store handling  
- Cloud sync  

What began as an exploratory project is now taking shape as a serious long-term build.

---

## Recommended Packages  

### **Zod**  
Schema validation for forms and data.  
- Prevents invalid input  
- Helpful for robust form logic  

### **Axios**  
Useful if API sync is added later.

### **VueUse**  
A great set of utilities:  
- Debounce  
- Dark mode helpers  
- Local storage helpers  
- Composables ready to use  

---

## License  
This project is for educational and portfolio use.  
Feel free to explore, learn, or extend the concepts.


 



cies  
