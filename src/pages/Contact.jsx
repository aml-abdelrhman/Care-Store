import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:support@carestore.com?subject=Message from ${form.name}&body=${form.message}`;
      alert("تم إرسال الرسالة!");
    setForm({
    name: "",
    email: "",
    message: "",
  });
  };

  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you! Reach out for inquiries, support, or feedback.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-[#bfa17a] text-xl" />
              <span className="text-gray-700">+1 800 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#bfa17a] text-xl" />
              <span className="text-gray-700">support@carestore.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#bfa17a] text-xl" />
              <span className="text-gray-700">123 Beauty St, Los Angeles, CA</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#bfa17a]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#bfa17a]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#bfa17a] resize-none"
              rows="5"
            />

            <button
              type="submit"
              className="bg-[#bfa17a] text-white font-semibold px-6 py-3 rounded hover:bg-[#a78b65] transition"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
