import React, { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setVisible(false)}
          className="text-red-600 font-bold text-lg hover:underline"
        >
          X Close
        </button>
      </div>

      <h1 className="text-3xl font-bold text-[#bfa17a] mb-8 text-center">
        🛒 Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.uniqueKey}
                className="flex items-center justify-between border p-4 rounded-lg bg-white shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#bfa17a] font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <label className="text-sm text-gray-500">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) =>
                          updateQuantity(item, parseInt(e.target.value))
                        }
                        className="w-16 border rounded px-2 py-1 text-center"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)} 
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-96 p-6 bg-white rounded-lg shadow space-y-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 font-medium">Items:</span>
              <span className="font-semibold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600 font-medium">Total Price:</span>
              <span className="font-bold text-lg text-[#bfa17a]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-[#bfa17a] text-white font-semibold py-3 rounded hover:bg-[#a78b57] transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
