"use client";

import React, { useEffect, useState, useRef } from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const HomeSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const totalSlides: number = 3;

  // Swipe detection refs
  const startX = useRef<number>(0);
  const endX = useRef<number>(0);

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;

    if (distance > 50) {
      // swipe left → next slide
      setIndex((prev) => (prev + 1) % totalSlides);
    } else if (distance < -50) {
      // swipe right → previous slide
      setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }

    // Reset
    startX.current = 0;
    endX.current = 0;
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % totalSlides),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white overflow-hidden">
      <div
        className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {["1.png", "2.png", "3.png"].map((img, i) => (
            <div key={i} className="relative min-w-full h-full">
              <img
                src={`/images/${img}`}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-8 sm:pb-24">
                <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
                  Ekjahan Enterprises
                </h2>

                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                  {i === 0 && (
                    <>
                      Powering Homes
                      <br /> Nourishing Lives
                    </>
                  )}
                  {i === 1 && (
                    <>
                      Connecting Energy
                      <br /> and Essentials
                    </>
                  )}
                  {i === 2 && (
                    <>
                      Your Trust
                      <br /> Our Guarantee
                    </>
                  )}
                </h1>

                <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
                  {i === 0 &&
                    "Electricity powers homes. We power trust. Food fuels families. We nourish lives."}
                  {i === 1 &&
                    "We deliver quality products and trusted services that keep homes powered and families happy."}
                  {i === 2 &&
                    "From power tools to provisions, we're committed to excellence and reliability."}
                </p>

                {/* <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition">
                  Join Us Today
                </button> */}
                <SecondaryButton
                  label="Join Us Today"
                  bgColor="#ff5e5e"
                  textColor="white"
                  
                />
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-[#27cfa8] text-[#27cfa8] w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setIndex((prev) => (prev + 1) % totalSlides)}
          className="absolute right-4 top-1/2 -translate-y-1/2 border-2 border-[#27cfa8] text-[#27cfa8] w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-[4px] w-6 rounded-full transition-all ${
                i === index ? "bg-gray-300" : "bg-gray-500/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
