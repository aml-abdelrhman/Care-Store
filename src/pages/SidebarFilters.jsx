import React from "react";
import { FaStar } from "react-icons/fa";

const SidebarFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  rating,
  onRatingChange,
  searchQuery,
  onSearchChange,
  availability,
  onAvailabilityChange,
}) => {
  return (
    <aside className="w-full sm:w-64 bg-white shadow p-5 rounded-xl">
      <h3 className="font-semibold text-lg mb-4 text-[#3E2F1C]">
        Filter Options
      </h3>
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h4 className="font-medium mb-2 text-[#3E2F1C]">Search</h4>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#b08b56]"
        />
      </div>

      <div className="mb-6 border-b border-gray-200 pb-4">
        <h4 className="font-medium mb-2 text-[#3E2F1C]">By Category</h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`cursor-pointer text-sm p-2 rounded-lg ${
                selectedCategory === cat
                  ? "bg-[#f4ebde] text-[#b08b56]"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 border-b border-gray-200 pb-4">
        <h4 className="font-medium mb-2 text-[#3E2F1C]">Price Range</h4>
        <input
          type="range"
          min="10"
          max="500"
          value={priceRange}
          onChange={(e) => onPriceChange(e.target.value)}
          className="w-full accent-[#b08b56]"
        />
        <p className="text-sm mt-1 text-gray-600">Up to ${priceRange}</p>
      </div>

      <div className="mb-6 border-b border-gray-200 pb-4">
        <h4 className="font-medium mb-2 text-[#3E2F1C]">Rating</h4>
        <div className="flex flex-col gap-1">
          {[5, 4, 3, 2, 1].map((r) => (
            <label
              key={r}
              className="flex items-center space-x-2 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                name="rating"
                value={r}
                checked={rating === r}
                onChange={() => onRatingChange(r)}
                className="accent-[#b08b56]"
              />
              <div className="flex items-center gap-1">
                {Array.from({ length: r }, (_, i) => (
                  <FaStar key={i} className="text-[#d8db00]" />
                ))}
                <span className="ml-1">& up</span>
              </div>
            </label>
          ))}
          <button
            onClick={() => onRatingChange(null)}
            className="text-xs text-[#b08b56] mt-2 hover:underline self-start"
          >
            Clear Rating
          </button>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2 text-[#3E2F1C]">Availability</h4>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              value="in-stock"
              checked={availability === "in-stock"}
              onChange={() => onAvailabilityChange("in-stock")}
              className="accent-[#b08b56]"
            />
            <span>Available in stock</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="availability"
              value="out-of-stock"
              checked={availability === "out-of-stock"}
              onChange={() => onAvailabilityChange("out-of-stock")}
              className="accent-[#b08b56]"
            />
            <span>Out of stock</span>
          </label>
          <button
            onClick={() => onAvailabilityChange(null)}
            className="text-xs text-[#b08b56] mt-2 hover:underline self-start"
          >
            Clear Availability
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarFilters;
