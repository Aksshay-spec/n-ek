"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialItem {
  id: number;
  name: string;
  text: string;
  rating: number;
  bg: string;
}

const Testimonial = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Contractor, Indore",
      text: "SAPTAAR switches are the most durable I’ve used.",
      rating: 5,
      bg: "bg-[#a6f4f4]",
    },
    {
      id: 2,
      name: "Dealer, Bhopal",
      text: "Fantastic support and reliable quality every time.",
      rating: 5,
      bg: "bg-[#a6f4f4]",
    },
    {
      id: 3,
      name: "Vendor, Ujjain",
      text: "Their service and response time are unmatched.",
      rating: 4,
      bg: "bg-[#a6f4f4]",
    },
    {
      id: 4,
      name: "Distributor, Gwalior",
      text: "Highly recommend for their commitment to quality.",
      rating: 5,
      bg: "bg-[#a6f4f4]",
    },
    {
      id: 5,
      name: "Partner, Jabalpur",
      text: "The best experience working with a trusted brand.",
      rating: 5,
      bg: "bg-[#a6f4f4]",
    },
  ];

  const [current, setCurrent] = useState<number>(0);

  // Swipe logic
  let touchStartX = 0;
  let touchEndX = 0;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchEndX - touchStartX;

    if (distance < -50) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }
    if (distance > 50) {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      className="relative py-16 text-center overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h2 className="text-3xl font-bold text-black mb-1">
        Every Input Matters
      </h2>
      <p className="text-lg font-semibold text-gray-700 mb-6">
        Vendors &amp; Distributors
      </p>

      <div className="h-1 w-32 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

      <div className="relative flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-[300px] flex justify-center items-center">
          {testimonials.map((item, index) => {
            const indexDiff =
              (index - current + testimonials.length) % testimonials.length;

            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (indexDiff === 0) {
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (indexDiff === 1) {
              translateX = 200;
              scale = 0.9;
              opacity = 0.6;
              zIndex = 20;
            } else if (indexDiff === testimonials.length - 1) {
              translateX = -200;
              scale = 0.9;
              opacity = 0.6;
              zIndex = 20;
            } else {
              translateX = 600;
              opacity = 0;
              scale = 0.8;
              zIndex = 0;
            }

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div
                  className={`${item.bg} p-6 rounded-2xl shadow-md w-[250px] sm:w-[300px] md:w-[360px] mx-auto`}
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">🙂</span>
                  </div>

                  <p className="text-gray-800 text-sm mb-3">{item.text}</p>
                  <p className="text-black font-semibold italic mb-2">
                    — {item.name}
                  </p>

                  <div className="flex justify-center text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
