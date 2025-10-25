import React from "react";

const SectionHeader = ({ title, subtitle, align = "center" }) => {
  return (
    <div
      className={`w-full py-3 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3E2F1C] mb-2">
          {title}
        </h2>
        <p className="text-base md:text-lg text-[#7C6E5A] max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="w-16 h-1 bg-[#C2B8A3] mx-auto mt-4 rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeader;