import React from "react";
import SectionHeader from "../Components/ui/SectionHeader"; // تأكدي من المسار حسب مشروعك

const Services = () => {
  const categories = [
    {
      title: "Hair Care",
      image: "https://images.pexels.com/photos/7428094/pexels-photo-7428094.jpeg",
      color: "from-[#EDE3D3] to-[#F8F4EF]",
    },
    {
      title: " Skin Care",
      image: "https://images.pexels.com/photos/32565177/pexels-photo-32565177.jpeg",
      color: "from-[#F3E9DA] to-[#F9F6F1]",
    },
    {
      title: "Body Care ",
      image: "https://images.pexels.com/photos/5582621/pexels-photo-5582621.jpeg",
      color: "from-[#E9DFC9] to-[#F8F4EF]",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <SectionHeader
          title="  Beauty & Care Services"
          subtitle="We offer you a comprehensive range of care products to give you a natural glow and lasting beauty"
         />
         
        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-80 h-60 object-cover mb-3 transition-transform duration-300 hover:scale-105  cursor-pointer"
              />
              <h3 className="text-lg font-medium text-[#7e5b2e]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
