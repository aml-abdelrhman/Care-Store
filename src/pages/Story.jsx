import React from "react";

export default function Story() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      text: "Our journey started with a small dream — to bring natural, skin-friendly products to everyone. We began crafting handmade skincare items from pure organic ingredients.",
      image: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    },
    {
      year: "2020",
      title: "Growing with Passion",
      text: "Our community grew, and so did our product line. We introduced haircare and bodycare collections that quickly became customer favorites.",
      image: "https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg",
    },
    {
      year: "2022",
      title: "Going Global",
      text: "We expanded our reach and started shipping internationally. Our mission to promote natural beauty became a global movement.",
      image: "https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg",
    },
    {
      year: "2025",
      title: "A Sustainable Future",
      text: "Today, we’re proud to continue innovating with eco-friendly packaging and sustainable sourcing — because beauty should care for the planet too.",
      image: "https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFDF9]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3E2F1C] text-center mb-10">
          Our Story
        </h1>
        <p className="text-center text-[#7C6E5A] text-lg mb-16 max-w-3xl mx-auto">
          Every great brand has a story. Ours began with a passion for natural
          beauty, honesty, and a deep respect for the earth.
        </p>

        <div className="relative border-l-4 border-[#C2B8A3] ml-4 md:ml-12">
          {timeline.map((event, index) => (
            <div
              key={index}
              className="mb-16 ml-8 md:ml-12 flex flex-col md:flex-row items-start gap-8"
            >
              <div className="w-4 h-4 bg-[#b08b56] rounded-full absolute -left-[10px] mt-2" />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#3E2F1C]">
                  {event.year} — {event.title}
                </h3>
                <p className="text-[#7C6E5A] mt-2">{event.text}</p>
              </div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/2 h-56 object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
