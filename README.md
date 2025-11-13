# Dynamic Product Filter & Cart

## 🛍️ ShopSmart — Modern React E-Commerce UI

A simple, responsive, and modern mini e-commerce web app built with React + Vite + Tailwind CSS.
Features dynamic product filtering, shopping cart drawer, and animated notifications — perfect for portfolios, assignments, or learning modern frontend design.

✨ Features

⚡ Fast & Lightweight — Powered by React + Vite

🎨 Modern UI — Tailwind CSS + beautiful gradient backgrounds

🧭 Category Filter — Filter products dynamically

🛒 Cart Drawer — Slide-in cart with add/remove functionality

🔔 Notification Center — Animated “Added to Cart” popup

📱 Fully Responsive — Works on mobile, tablet, and desktop

🧩 Reusable Components — Clean and modular structure

🏗️ Project Structure

ShopSmart/
├── public/
│ └── products/ # Product images
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── CategoryFilter.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductCard.jsx
│ │ ├── CartDrawer.jsx
│ │ └── NotificationCenter.jsx
│ ├── data/
│ │ └── products.js # Product list (image, category, etc.)
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

🧰 Tech Stack

Frontend - React 18 + Vite
Styling Tailwind CSS
Icons Lucide React / React Icons
State Management useState / useEffect
Notifications Custom NotificationCenter component

⚙️ Installation & Setup

Clone this repository and run the following commands:

# 1️⃣ Clone the repo

git clone https://github.com/your-username/shopsmart.git
cd shopsmart

# 2️⃣ Install dependencies

npm install

# 3️⃣ Run the development server

npm run dev

Then open your browser and visit 👉
http://localhost:5173/

🧮 Example Products (data/products.js)
export const initialProducts = [
{
id: 1,
name: "The Great Gatsby",
category: "Books",
price: 299,
image: "/products/book1.jpg",
},
];

🖼️ UI Preview
🏠 Home Page 🛒 Cart Drawer 🔔 Notification

🌈 Upcoming Enhancements

🏷️ Product search bar

💳 Checkout page

❤️ Wishlist feature

🌙 Dark mode

🤝 Contributing

Contributions are welcome!
If you find a bug or want to suggest a feature:

Fork the repo

Create a new branch (feature/your-feature-name)

Commit your changes

Open a Pull Request

🧑‍💻 Author

👋 Ambar Ubale

🌐 https://ambarportfolio.vercel.app/
