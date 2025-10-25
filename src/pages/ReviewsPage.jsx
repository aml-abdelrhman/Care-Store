import React from "react";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "I absolutely love the products! My skin has never felt smoother. The delivery was fast and the packaging was beautiful!",
    },
    {
      id: 2,
      name: "Omar Hassan",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      rating: 4,
      text: "Great quality and amazing scent. I recommend the facial cream, it’s so refreshing and natural.",
    },
    {
      id: 3,
      name: "Laila Mostafa",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      text: "Best skincare brand I’ve tried so far! Everything feels luxurious but still affordable.",
    },
    {
      id: 4,
      name: "Karim Youssef",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      rating: 4,
      text: "Customer service was super helpful, and the moisturizer really improved my skin after just a week.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 text-center">
        {/* عنوان الصفحة */}
        <h2 className="text-4xl font-bold text-[#bfa17a] mb-3">
          Customer Reviews
        </h2>
        <p className="text-gray-600 mb-10">
          See what our happy customers say about Care Store ✨
        </p>

        {/* كروت الآراء */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-[#bfa17a]"
              />
              <h3 className="text-xl font-semibold text-[#3E2F1C] mb-2">
                {review.name}
              </h3>
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating ? "text-[#bfa17a]" : "text-gray-300"
                    } fill-current`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “{review.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
