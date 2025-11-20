"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaBolt } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

// Define TypeScript type for SKU items
interface SkuItem {
  count: string;
  title: string;
  icon: React.ReactNode;
}

const SkuSection: React.FC = () => {
  const skuItems: SkuItem[] = [
    {
      count: "150+",
      title: "Electrical SKUs",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
    },
    {
      count: "200+",
      title: "FMCG SKUs",
      icon: <FaShoppingBasket className="text-red-500 text-3xl" />,
    },
    {
      count: "175+",
      title: "Electrical SKUs",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
    },
    {
      count: "220+",
      title: "FMCG SKUs",
      icon: <FaShoppingBasket className="text-red-500 text-3xl" />,
    },
    {
      count: "190+",
      title: "Electrical SKUs",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
    },
    {
      count: "250+",
      title: "FMCG SKUs",
      icon: <FaShoppingBasket className="text-red-500 text-3xl" />,
    },
    {
      count: "300+",
      title: "Electrical SKUs",
      icon: <FaBolt className="text-yellow-500 text-3xl" />,
    },
    {
      count: "275+",
      title: "FMCG SKUs",
      icon: <FaShoppingBasket className="text-red-500 text-3xl" />,
    },
  ];

  const totalSku = skuItems.length;
  const visibleSkuCount = 4;

  const [skuIndex, setSkuIndex] = useState<number>(0);

  const startX = useRef<number>(0);
  const endX = useRef<number>(0);

  // TOUCH EVENTS WITH TYPES
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;

    if (distance > 50) {
      setSkuIndex((prev) => (prev + 1) % totalSku);
    } else if (distance < -50) {
      setSkuIndex((prev) => (prev - 1 + totalSku) % totalSku);
    }

    startX.current = 0;
    endX.current = 0;
  };

  useEffect(() => {
    const interval = setInterval(
      () => setSkuIndex((prev) => (prev + 1) % totalSku),
      3000
    );
    return () => clearInterval(interval);
  }, [totalSku]);

  return (
    <section className="bg-white py-8 text-center">
      <h3 className="mt-12 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
        Every Count Tells Our Story
      </h3>

      <div
        className="mt-8 relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(skuIndex * 100) / visibleSkuCount}%)`,
            width: `${(totalSku / visibleSkuCount) * 100}%`,
          }}
        >
          {skuItems.map((item, i) => (
            <div key={i} className="w-[25%] flex-shrink-0 flex justify-center">
              <div className="bg-blue-100 mr-2 text-black rounded-lg shadow p-4 w-[150px] sm:w-[180px] relative">
                <div className="flex items-center gap-2 justify-center mt-2">
                  <span>{item.icon}</span>
                  <h2 className="text-3xl font-bold">{item.count}</h2>
                </div>

                <p className="text-sm font-semibold mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkuSection;
