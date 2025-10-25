// src/Componets/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f5f0] text-[#3E2F1C] pt-16 pb-8 border-t border-[#e7e1d8]">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-2xl font-bold text-[#bfa17a] mb-4">Care Store</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your trusted destination for high-quality skincare and beauty
            products. We believe in promoting natural confidence and self-care.
          </p>
          <p className="text-sm text-gray-500">© 2025 Care Store. All rights reserved.</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#bfa17a] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#HomePage" className="hover:text-[#bfa17a] transition">Home</a></li>        
            <li><Link to="/productPage" className="hover:text-[#8d734a] transition">Shop</Link></li>
            <li><a href="#About" className="hover:text-[#bfa17a] transition">About</a></li>            
            <li><Link to="/Contact" className="hover:text-[#8d734a] transition">Contact</Link></li>
            <li><Link to="/reviews" className="hover:text-[#8d734a] transition">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#bfa17a] mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/faq" className="hover:text-[#8d734a] transition">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-[#8d734a] transition">Shipping Info</Link></li>
            <li><Link to="/returns" className="hover:text-[#8d734a] transition">Return Policy</Link></li>
            <li><Link to="/privacy" className="hover:text-[#8d734a] transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#bfa17a] mb-4">Stay Connected</h4>
          <p className="text-gray-700 mb-4">
            Subscribe to get updates on new arrivals and special offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md border border-[#e7e1d8] bg-white text-gray-700 outline-none focus:ring-2 focus:ring-[#bfa17a]"
            />
            <button
              type="submit"
              className="bg-[#bfa17a] text-white px-4 py-2 rounded-md hover:bg-[#9c7a4a] transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-[#bfa17a]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-[#8d734a] transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-[#8d734a] transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-[#8d734a] transition" />
            </a>
            <a href="mailto:support@carestore.com">
              <FaEnvelope className="text-xl hover:text-[#8d734a] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
