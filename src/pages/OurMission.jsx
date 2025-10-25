import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../Components/ui/SectionHeader";

const OurMission = () => {
  return (
    <div className="bg-[#fffffe] py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-20 text-center">
        <SectionHeader
          title="Our Vision & Mission"
          subtitle="Our vision is to redefine beauty standards by promoting confidence and authenticity. We believe everyone deserves to feel beautiful and comfortable in their own skin. Through our products, we aim to empower individuals to express their unique beauty effortlessly."
          align="center"
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-[#b08b56] mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To deliver safe, effective, and sustainable beauty solutions that
              enhance your natural radiance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="text-xl font-semibold text-[#b08b56] mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted brand that inspires confidence and
              self-love through exceptional products and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
