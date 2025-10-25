import React, { useState } from "react";

export default function WriteReviewPage() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your review!");
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6">
          Write a Review
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 text-left"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-[#e7e1d8] px-4 py-2 rounded-md outline-none"
            required
          />
          <textarea
            placeholder="Your Review"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border border-[#e7e1d8] px-4 py-2 rounded-md outline-none h-32"
            required
          />
          <button
            type="submit"
            className="bg-[#bfa17a] text-white py-2 px-6 rounded-md hover:bg-[#a78b65] transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
