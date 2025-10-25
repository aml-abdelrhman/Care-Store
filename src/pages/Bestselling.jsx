// src/pages/BestSelling.jsx
import React from "react";
import ReusableProductSection from "../Components/ui/ReusableProductSection";
import  productServices  from "../features/productServices";

export default function BestSelling() {
  const bestSellingProducts = productServices.filter((p) => p.rating >= 4);

  return (
    <ReusableProductSection
      title="Best Selling"
      products={bestSellingProducts}
    />
  );
}
