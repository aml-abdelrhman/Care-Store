import React, { useMemo, useState, useCallback, useEffect } from "react";
import SidebarFilters from "../pages/SidebarFilters";
import ProductCard from "./Productcard";
import productServices from "./productServices";

const ProductPage = () => {
  const products = productServices;

  const savedState = JSON.parse(localStorage.getItem("productPageState")) || {};

  const [selectedCategory, setSelectedCategory] = useState(savedState.selectedCategory || "All");
  const [priceRange, setPriceRange] = useState(savedState.priceRange || 1000);
  const [rating, setRating] = useState(savedState.rating || null);
  const [searchQuery, setSearchQuery] = useState(savedState.searchQuery || "");
  const [sortBy, setSortBy] = useState(savedState.sortBy || "default");
  const [availability, setAvailability] = useState(savedState.availability || null);
  const [currentPage, setCurrentPage] = useState(savedState.currentPage || 1);

  const productsPerPage = 9;

  useEffect(() => {
    const stateToSave = {
      selectedCategory,
      priceRange,
      rating,
      searchQuery,
      sortBy,
      availability,
      currentPage,
    };
    localStorage.setItem("productPageState", JSON.stringify(stateToSave));
  }, [
    selectedCategory,
    priceRange,
    rating,
    searchQuery,
    sortBy,
    availability,
    currentPage,
  ]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) =>
          (selectedCategory === "All" || p.category === selectedCategory) &&
          p.price <= priceRange &&
          (!rating || p.rating >= rating) &&
          p.name?.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (!availability ||
            (availability === "in-stock" && p.available) ||
            (availability === "out-of-stock" && !p.available))
      )
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        return 0;
      });
  }, [
    products,
    selectedCategory,
    priceRange,
    rating,
    searchQuery,
    sortBy,
    availability,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCategory = useCallback((cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); 
  }, []);

  const handleAvailability = useCallback((val) => {
    setAvailability(val);
    setCurrentPage(1);
  }, []);

  return (
    <section className="py-10 bg-[#FFFDF9]" id="ProductPage">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-6">
        <SidebarFilters
          categories={["All", "Skin Care", "Hair Care", "Makeup", "Body Care"]}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          rating={rating}
          onRatingChange={setRating}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          availability={availability}
          onAvailabilityChange={handleAvailability}
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <h2 className="text-2xl font-bold text-gray-800">Shop</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md p-2 text-sm focus:ring-2 focus:ring-[#b08b56]"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                No products found.
              </p>
            ) : (
              currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-4 py-2 border rounded hover:bg-gray-200"
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded ${
                    currentPage === i + 1
                      ? "bg-[#bfa17a] text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="px-4 py-2 border rounded hover:bg-gray-200"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
