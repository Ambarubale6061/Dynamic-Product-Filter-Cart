import React from "react";

const Navbar = ({ openCart }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">ShopSmart 🛒</h1>
      <button
        onClick={openCart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
      >
        View Cart
      </button>
    </nav>
  );
};

export default Navbar;
