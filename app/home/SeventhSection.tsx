"use client";

import React from "react";
import { FaBoxes, FaWarehouse, FaCubes, FaUndoAlt } from "react-icons/fa";

// Type definition for each stat item
interface StatItem {
  icon: React.ReactNode;
  number: string;
  text: string;
}

const stats: StatItem[] = [
  {
    icon: <FaBoxes className="text-white text-4xl" />,
    number: "40+",
    text: "SKUs — Flours, Beverages, Staples, Snacks",
  },
  {
    icon: <FaWarehouse className="text-white text-4xl" />,
    number: "2.5M+",
    text: "packs distributed",
  },
  {
    icon: <FaCubes className="text-white text-4xl" />,
    number: "5,000+",
    text: "retail shelves stocked",
  },
  {
    icon: <FaUndoAlt className="text-white text-4xl" />,
    number: "ZERO",
    text: "product recalls",
  },
];

export default function SeventhSection() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-10 gap-x-4 max-w-3xl mx-auto text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-28 h-28 flex items-center justify-center bg-[#ff6b6b] rounded-full mb-4 shadow-md">
              {item.icon}
            </div>

            <h3 className="text-3xl font-extrabold text-black">
              {item.number}
            </h3>

            <p className="text-gray-700 text-sm mt-1 max-w-[150px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
