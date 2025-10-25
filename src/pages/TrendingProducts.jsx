import React from "react";
import ReusableProductSection from "../Components/ui/ReusableProductSection";
import  productServices  from "../features/productServices";

export default function TrendingProducts() {
  const TrendingProducts = productServices.filter((p) => p.rating >= 4.3);

  return (
    <ReusableProductSection
      title="TrendingProducts"
      products={TrendingProducts}
    />
  );
}
