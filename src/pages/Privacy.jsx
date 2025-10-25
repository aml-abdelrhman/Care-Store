// src/pages/Privacy.jsx
import React from "react";

export default function Privacy() {
  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6 text-center">Privacy Policy</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center mb-4">
          Your privacy is important to us. We do not share your personal information with third parties.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 max-w-3xl mx-auto">
          <li>We collect only necessary information for your orders.</li>
          <li>All transactions are secured and encrypted.</li>
          <li>You can request deletion of your data anytime.</li>
        </ul>
      </div>
    </section>
  );
}
