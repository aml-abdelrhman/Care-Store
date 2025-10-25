import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";
import CheckoutPage from "../pages/CheckoutPage";
import Profile from "../pages/Profile";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services"; 
import ProductPage from "../features/productpage"; 
import BestSelling from "../pages/BestSelling";
import TrendingProducts from "../pages/TrendingProducts";
import About from "../pages/About"; 
import Story from "../pages/Story";
import OurMission from "../pages/OurMission";
import ReviewsPage from "../pages/ReviewsPage";
import WriteReviewPage from "../pages/WriteReviewPage";
import Contact from "../pages/Contact";
import Offers from "../pages/Offers";
import Footer from "../pages/Footer";
import Faq from "../pages/Faq";
import Shipping from "../pages/Shipping";
import Returns from "../pages/Returns";
import Privacy from "../pages/Privacy";
export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Services />
              <ProductPage />
              <BestSelling />
              <TrendingProducts />
              <About />
              <OurMission />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/story" element={<Story />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/write-review" element={<WriteReviewPage />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shipping" element={<Shipping />} />
       <Route path="/returns" element={<Returns />} />
       <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
