// src/pages/Returns.jsx
import React from "react";

export default function Returns() {
  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6 text-center">Return Policy</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-4">
          We want you to be completely satisfied with your purchase.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
          <li>Returns accepted within 14 days of delivery.</li>
          <li>Items must be in original condition.</li>
          <li>Refunds will be processed within 5 business days.</li>
        </ul>
      </div>
    </section>
  );
}
