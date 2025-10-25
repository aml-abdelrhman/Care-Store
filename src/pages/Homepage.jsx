import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/ui/Button";

const Hero = () => {
  const navigate = useNavigate(); 

  const handleShopNow = () => {
    navigate("/ProductPage");
  };

  return (
    <section className="relative w-full h-screen" id ="HomePage">
      <img
        src="https://images.pexels.com/photos/13516791/pexels-photo-13516791.jpeg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
       <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Welcome to Care Store
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
          Discover the best beauty products for your skin & hair
        </p>
        <Button text="Shop Now" onClick={handleShopNow} type="secondary" />
      </div>
    </section>
  );
};

export default Hero;
