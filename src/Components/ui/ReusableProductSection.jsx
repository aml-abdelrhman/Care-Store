import React, { useState } from "react";
import ReusableCard from "./ReusableCard";
import Button from "./Button";

export default function ReusableProductSection({
  title = "Products",
  products = [],
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 5);

  return (
    <section className="bg-[#FFFDF9] py-10 border-x-4 border-[#b08b56]/30 my-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#866624]">{title}</h2>
          <Button
            text={showAll ? "Show Less" : "View All"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>

        {visibleProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {visibleProducts.map((product, index) => (
              <ReusableCard
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.category}
                price={product.price}
                label={
                  index === 0 ? "Best Selling" : index === 1 ? "Offer" : ""
                }
              >
                <Button
                  text="View"
                  onClick={() => console.log("View product:", product.name)}
                  small
                />
              </ReusableCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
