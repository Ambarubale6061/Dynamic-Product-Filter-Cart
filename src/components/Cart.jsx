import React from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

export default function Cart({
  cart,
  removeFromCart,
  clearCart,
  updateQuantity,
}) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-panel">
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-xl font-bold">🛒 Cart</h2>
        <button onClick={clearCart} className="btn-clear">
          Clear
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-8 muted">
          Your cart is empty. Add items to see them here.
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm muted">${item.price} each</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="qty-pill">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1"
                    aria-label="decrease"
                  >
                    <FiMinus />
                  </button>

                  <span className="px-2 font-medium">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1"
                    aria-label="increase"
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="text-right">
                  <div className="font-semibold">
                    ${item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    title="Remove"
                    className="mt-1 text-xs text-red-500 hover:text-red-600 flex items-center gap-1"
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t flex items-center justify-between font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button className="w-full btn-accent mt-3">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
