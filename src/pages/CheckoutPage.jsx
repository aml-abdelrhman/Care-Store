import React, { useState } from "react";
import { useCartStore } from "../store/useCartStore";

export default function CheckoutPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    payment: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    alert("Order Completed! Thank you for shopping.");
    clearCart(); 
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#bfa17a] mb-8 text-center">
        🛒 Checkout
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg bg-white shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#bfa17a] font-medium text-base">
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
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-96 p-6 bg-white rounded-lg shadow-md space-y-4">
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

            <h3 className="text-xl font-semibold mt-4">Customer Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={customer.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
            <select
              name="payment"
              value={customer.payment}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Select Payment Method</option>
              <option value="card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>

            <button
              onClick={handleOrder}
              className="w-full bg-[#bfa17a] text-white font-semibold py-3 rounded-lg hover:bg-[#a78b57] transition mt-2"
            >
              Complete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
