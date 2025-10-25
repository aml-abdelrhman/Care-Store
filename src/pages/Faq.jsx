import React from "react";

export default function Faq() {
  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6 text-center">FAQs</h2>
        <p className="text-gray-700 mb-6 text-center">
          Frequently Asked Questions about our products and services.
        </p>
        <ul className="space-y-4 text-gray-700 max-w-3xl mx-auto">
          <li><strong>Q:</strong> How long does shipping take?<br /><strong>A:</strong> Usually 3-7 business days.</li>
          <li><strong>Q:</strong> Can I return a product?<br /><strong>A:</strong> Yes, please check our Return Policy.</li>
          <li><strong>Q:</strong> Do you ship internationally?<br /><strong>A:</strong> Currently, we only ship within the USA.</li>
        </ul>
      </div>
    </section>
  );
}
