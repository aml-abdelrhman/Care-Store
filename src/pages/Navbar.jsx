import React, { useState } from "react";
import {
  Phone,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Search,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "../store/useCartStore";
import LoginPage from "../Components/ui/LoginPage";
import Button from "../Components/ui/Button";

const Navbar = () => {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const { user, toggleLogin, openLogin } = useUserStore();
  const { cartItems, wishlistItems } = useCartStore();
  const navigate = useNavigate();

  return (
    <header className="w-full shadow-sm bg-white text-gray-700 font-sans">
      <div className="w-full bg-[#f9f5f0] py-2 text-sm border-b border-[#e7e1d8]">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2 text-[#bfa17a]">
            <Phone size={16} />
            <span>Call us: +1 800 123 4567</span>
          </div>

          <p className="text-[#bfa17a] w-full text-center sm:w-auto">
            Welcome to Care Store ✨
          </p>

          <div className="flex items-center gap-3 text-[#bfa17a]">
            <Button
              text={user?.name ? `Welcome, ${user.name}` : "Sign In"}
              onClick={() => (user ? navigate("/profile") : toggleLogin())}
              type="primary"
              className="px-2 py-1 text-xs"
            />

            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={16} className="cursor-pointer hover:text-[#8d734a]" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={16} className="cursor-pointer hover:text-[#8d734a]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={16} className="cursor-pointer hover:text-[#8d734a]" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full py-3 border-b border-[#e7e1d8] bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-3">
          <Link to="/">
            <h1 className="text-3xl font-extrabold text-[#bfa17a] tracking-wide">
              CARE <span className="text-[#d5c4a1]">STORE</span>
            </h1>
          </Link>

          <div className="flex items-center border rounded-full overflow-hidden w-full sm:w-1/2 shadow-sm border-[#e7e1d8] bg-[#f9f5f0]">
            <select className="bg-[#f2ece4] text-[#8d734a] px-3 py-2 border-r border-[#e7e1d8] outline-none text-sm">
              <option>All Categories</option>
              <option>Skin Care</option>
              <option>Hair Care</option>
              <option>Body Care</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 outline-none text-gray-700 bg-[#f9f5f0] text-sm"
            />
            <button className="bg-[#bfa17a] text-white px-4 py-2 hover:bg-[#a78b65] transition">
              <Search size={18} />
            </button>
          </div>

          <div className="flex items-center gap-4 text-[#bfa17a]">
            <Link to="/wishlist" className="relative hover:text-[#8d734a]">
              <Heart />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#bfa17a] text-white text-xs rounded-full px-1">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative hover:text-[#8d734a]">
              <ShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#bfa17a] text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <User
              className="cursor-pointer hover:text-[#8d734a]"
              onClick={() => navigate("/profile")}
              title="My Account"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-3 bg-[#f9f5f0]">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex flex-wrap justify-center items-center gap-6 font-medium text-gray-700">
            <li>
              <a href="#HomePage" className="hover:text-[#bfa17a] transition">Home</a>
            </li>
            <li>
              <a href="#About" className="hover:text-[#bfa17a] transition">About</a>
            </li>
            <li>
              <a href="#ProductPage" className="hover:text-[#bfa17a] transition">Shop</a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#bfa17a] transition">Contact</Link>
            </li>
            <li
              className="relative flex items-center gap-1 hover:text-[#bfa17a] cursor-pointer"
              onMouseEnter={() => setIsReviewsOpen(true)}
              onMouseLeave={() => setIsReviewsOpen(false)}
            >
              Reviews <ChevronDown size={16} />
              {isReviewsOpen && (
                <ul className="absolute left-0 top-6 bg-white border border-[#e7e1d8] rounded-md shadow-md w-40 text-sm text-gray-600 z-50">
                  <li>
                    <Link to="/reviews" className="block px-4 py-2 hover:bg-[#f9f5f0]">
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/write-review" className="block px-4 py-2 hover:bg-[#f9f5f0]">
                      Write a Review
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <Link
            to="/offers"
            className="bg-[#bfa17a] text-white px-4 py-2 rounded-md hover:bg-[#a78b65] transition text-sm"
          >
            Offers
          </Link>
        </nav>
      </div>

      {openLogin && <LoginPage />}
    </header>
  );
};

export default Navbar;
