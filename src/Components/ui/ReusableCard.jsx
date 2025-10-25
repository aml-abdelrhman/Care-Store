import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "./Button";
import { useCartStore } from "../../store/useCartStore";

export default function ReusableCard({
  image,
  title,
  description,
  price,
  label,
}) {
  const [message, setMessage] = useState("");
  const { addToCart, addToWishlist } = useCartStore();

  const handleAddToCart = () => {
    addToCart({ image, title, price });
    setMessage("✅ Added to Cart");
    setTimeout(() => setMessage(""), 1500);
  };

  const handleAddToWishlist = () => {
    addToWishlist({ image, title, price });
    setMessage("💖 Added to Wishlist");
    setTimeout(() => setMessage(""), 1500);
  };

  return (
    <div className="relative bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      {label && (
        <span className="absolute top-2 left-2 bg-[#b08b56] text-white text-xs font-semibold px-2 py-1 rounded-md">
          {label}
        </span>
      )}

      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-3 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        <p className="text-[#b08b56] font-bold mt-1">${price}</p>

        {/* الأزرار */}
        <div className="flex justify-between items-center mt-2">
          <Button
            text="Add to Cart"
            type="primary"
            className="text-xs px-2 py-1"
            onClick={handleAddToCart}
          />
          <Button
            text={<Heart size={14} />}
            type="secondary"
            className="p-2"
            onClick={handleAddToWishlist}
          />
        </div>

        {/* الرسالة */}
        {message && (
          <p className="text-green-600 text-xs text-center mt-1">{message}</p>
        )}
      </div>
    </div>
  );
}
