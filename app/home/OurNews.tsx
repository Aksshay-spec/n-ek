"use client";

import { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface NewsItem {
  id: number;
  title: string;
  publication: string;
}

export default function OurNews() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Top 10 Electrical Brands in Central India",
      publication: "[Publication Name]",
    },
    {
      id: 2,
      title: "Innovative Switch Designs Leading the Market",
      publication: "[Electrical Times]",
    },
    {
      id: 3,
      title: "SAPTAAR Expands Its Vendor Network Nationwide",
      publication: "[Business Insider]",
    },
    {
      id: 4,
      title: "How Smart Distribution Changed Electrical Retail",
      publication: "[Industry Journal]",
    },
  ];

  const [index, setIndex] = useState<number>(0);

  const total = newsItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="w-full bg-white py-10 px-3">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Our related News
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-black -mt-1">
          Your Trust our Guarantee
        </h2>
        <div className="w-40 h-2 bg-yellow-400 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Carousel */}
      <div className="relative mt-6 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-10 bg-white border border-gray-300 
          w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
        >
          <IoIosArrowBack size={22} />
        </button>

        {/* Slider Wrapper */}
        <div className="w-full sm:w-[70%] overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 px-6">
                <div className="bg-[#ff8f97] rounded-3xl py-10 px-4 text-center shadow-lg">
                  <FaUsers size={70} className="text-white mx-auto mb-4" />

                  <h3 className="text-lg sm:text-xl font-bold text-black px-4">
                    {item.title}
                  </h3>

                  <p className="text-white italic mt-2 text-sm sm:text-base">
                    — {item.publication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-10 bg-white border border-gray-300
          w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
        >
          <IoIosArrowForward size={22} />
        </button>
      </div>
    </div>
  );
}
