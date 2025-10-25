import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../Components/ui/SectionHeader";

const About = () => {
  return (
    <div className="bg-[#fcfbf8] py-16 "id="About">
      <SectionHeader
        title="About Us"
        subtitle="Learn more about our mission, vision, and the passionate team behind our brand."
        align="center"
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg"
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#3E2F1C] mb-4">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a passionate team dedicated to bringing you high-quality
            beauty and skincare products. Our mission is to make self-care
            simple, enjoyable, and accessible to everyone.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Since our founding, we’ve focused on providing top-notch products
            that combine science, nature, and innovation. Our experts work
            tirelessly to ensure every product meets the highest standards.
          </p>

          <Link
            to="/story"
            className="bg-[#b08b56] text-white px-4 py-2 rounded-md hover:bg-[#9c7a4a] transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
