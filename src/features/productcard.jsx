import React, { useState } from "react";
import { Star, ShoppingCart, Heart, CheckCircle } from "lucide-react";
import { useCartStore } from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useCartStore();
  const [message, setMessage] = useState(null);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 1500);
  };

  const handleAddToCart = () => {
    addToCart(product);
    showMessage("✅ Added to cart");
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    showMessage("💖 Added to wishlist");
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition duration-300 cursor-pointer relative">
      <div className="relative">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-[#b08b56] text-white text-xs px-2 py-1 rounded-full">
            {product.discount}% off
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      <div className="mt-4 text-left">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>


        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating
                  ? "text-yellow-300 fill-yellow-300"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm ml-2 text-gray-600">
            ({product.rating})
          </span>
        </div>

        <div className="mt-3">
          <span className="text-[#b08b56] font-semibold text-lg">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through ml-2">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {product.available ? (
          <p className="text-sm text-green-600 mt-2">In Stock</p>
        ) : (
          <p className="text-sm text-red-500 mt-2">Out of Stock</p>
        )}

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 bg-[#b08b56] text-white px-2 py-1.5 rounded-md text-xs hover:bg-[#a07a45] transition"
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>

          <button
            onClick={handleAddToWishlist}
            className="flex items-center justify-center border border-[#b08b56] text-[#b08b56] p-1.5 rounded-md hover:bg-[#fff7f0] transition"
          >
            <Heart size={14} />
          </button>
        </div>

        {message && (
          <div className="mt-3 flex justify-center">
            <div className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-md flex items-center gap-1 shadow">
              <CheckCircle size={14} />
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
