import React, { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, moveToCart } = useCartStore();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-end">
        <button
          onClick={() => setVisible(false)}
          className="text-red-600 font-bold text-lg hover:underline"
        >
          X Close
        </button>
      </div>

      <h1 className="text-3xl font-bold text-[#bfa17a] mb-8 text-center">
        💖 Your Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.uniqueKey}
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
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => moveToCart(item)} 
                    className="bg-[#bfa17a] text-white py-1 px-3 rounded hover:bg-[#a78b57] font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item)}
                    className="text-red-600 text-sm font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
