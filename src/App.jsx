import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import NotificationCenter from "./components/NotificationCenter";
import { initialProducts } from "./data/products";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // 🏷️ Get unique categories and prepend 'All' safely
  const uniqueCategories = Array.from(
    new Set(initialProducts.map((p) => p.category))
  );
  const categories = ["All", ...uniqueCategories.filter((c) => c !== "All")];

  const filteredProducts =
    selectedCategory === "All"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  // ✅ Show notification (one at a time + auto hide)
  const showNotification = (message, type = "success") => {
    setNotifications([{ id: Date.now(), message, type }]);
    setTimeout(() => setNotifications([]), 3000);
  };

  // 🛒 Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        showNotification(`${product.name} quantity updated 🛒`, "info");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showNotification(`${product.name} added to cart 🛍`, "success");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ Remove from cart
  const removeFromCart = (id) => {
    const product = cartItems.find((item) => item.id === id);
    showNotification(`${product?.name || "Item"} removed ❌`, "error");
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      <Navbar openCart={() => setCartOpen(true)} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <CartDrawer
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <NotificationCenter notifications={notifications} />
    </div>
  );
};

export default App;
