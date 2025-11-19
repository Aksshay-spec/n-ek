"use client";
import React, { useEffect, useState } from "react";

const TrendingProducts = () => {
  const totalTrending = 10;
  const visibleCount = 5;
  const [trendIndex, setTrendIndex] = useState(0);
  const trendingProducts = Array.from(
    { length: totalTrending },
    (_, i) => i + 1
  );

  // -----------------------------
  // 👉 Swipe States
  // -----------------------------
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;

    // Swipe left → next item
    if (swipeDistance < -50) {
      setTrendIndex((prev) => (prev + 1) % totalTrending);
    }

    // Swipe right → previous item
    if (swipeDistance > 50) {
      setTrendIndex((prev) => (prev === 0 ? totalTrending - 1 : prev - 1));
    }
  };
  // -----------------------------

  useEffect(() => {
    const interval = setInterval(
      () => setTrendIndex((prev) => (prev + 1) % totalTrending),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-8 overflow-hidden text-center">
      <h3 className="mt-8 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
        Trending Products
      </h3>

      <div
        className="mt-6 relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(trendIndex * 100) / visibleCount}%)`,
            width: `${(totalTrending / visibleCount) * 100}%`,
          }}
        >
          {trendingProducts.map((n) => (
            <div key={n} className="w-[20%] flex-shrink-0 flex justify-center">
              <div className="w-28 h-28 border-2 border-dashed border-black rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
