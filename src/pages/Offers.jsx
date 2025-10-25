// src/pages/BestSelling.jsx
import React from "react";
import ReusableProductSection from "../Components/ui/ReusableProductSection";
import  productServices  from "../features/productServices";

export default function Offers() {
  const Offers = productServices.filter((p) => p.price < 100);

  return (
    <ReusableProductSection
      title="Best Deals Under $100"
      products={Offers}
    />
  );
}