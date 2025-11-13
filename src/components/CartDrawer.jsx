import React from "react";
import { motion } from "framer-motion";

const CartDrawer = ({ isOpen, closeCart, cartItems, removeFromCart }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
        <button
          onClick={closeCart}
          className="text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">Your cart is empty 🛒</p>
      ) : (
        <div className="flex flex-col gap-4 flex-grow overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-semibold text-gray-800">
          Total: ${total.toFixed(2)}
        </p>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-3 rounded-lg"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </motion.div>
  );
};

export default CartDrawer;
