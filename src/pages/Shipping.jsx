// src/pages/Shipping.jsx
import React from "react";

export default function Shipping() {
  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6 text-center">Shipping Info</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-4">
          We offer fast and reliable shipping for all our products.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
          <li>Standard Shipping: 3-7 business days.</li>
          <li>Express Shipping: 1-3 business days.</li>
          <li>Free shipping for orders over $50.</li>
        </ul>
      </div>
    </section>
  );
}
