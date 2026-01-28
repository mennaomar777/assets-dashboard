# Assets Dashboard 📊

A responsive assets dashboard built with **Next.js**, **React**, and **Tailwind CSS**.  
The dashboard displays assets data with real-time price updates, and supports **search**, **sorting**, **filtering**, and **mobile-friendly design**.

---

## ✨ Features

- 📱 **Fully Responsive UI**
  - Table layout for tablet & desktop
  - Card layout for mobile screens

- 🔍 **Search**
  - Search assets by name
  - Debounced input for better performance

- ↕️ **Sorting**
  - Sort by price (ascending / descending)
  - Sort by change percentage (ascending / descending)

- 🏷 **Filtering**
  - Filter assets by category

- 🔄 **Real-Time Updates**
  - Asset prices and change percentages update every 2 seconds

- 🚫 **Empty State Handling**
  - Displays a friendly message when no assets match search/filter criteria

---

## 🛠 Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

---

## 📂 Project Structure

```bash
app/
├─ _components/
│ ├─ AssetsTable/
│ ├─ Search/
│ ├─ Sort/
│ └─ Filter/
├─ _interfaces/
│ ├─ asset.ts
├─ _lib/
│ ├─ data.ts
└─ page.tsx

```

---

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:

```bash
npm run dev
```

3. Open your browser at:

```bash
http://localhost:3000
```
