"use client";

import React from "react";
import { FaShieldAlt, FaMedal } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { GiJusticeStar } from "react-icons/gi";

// Define TypeScript type for each policy item
interface PolicyItem {
  icon: React.ReactNode;
  bg: string;
  title: string;
}

export default function Policies() {
  const items: PolicyItem[] = [
    {
      icon: <FaShieldAlt className="text-red-500 text-5xl" />,
      bg: "bg-green-100",
      title: "Warranty terms for electrical products",
    },
    {
      icon: <FaMedal className="text-red-500 text-5xl" />,
      bg: "bg-red-100",
      title: "Quality assurance for FMCG",
    },
    {
      icon: <RiLock2Fill className="text-blue-500 text-5xl" />,
      bg: "bg-red-100",
      title: "Privacy & data protection summary",
    },
    {
      icon: <GiJusticeStar className="text-red-500 text-5xl" />,
      bg: "bg-green-100",
      title: "Vendor code of conduct",
    },
  ];

  return (
    <section className="py-12 px-4 mb-12 sm:px-8 text-center bg-white">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
          Our legal Policies
        </h2>
        <p className="text-lg font-medium text-gray-800">
          Your Rights, Our Responsibility
        </p>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-xl mx-auto mb-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition"
          >
            <div
              className={`flex items-center justify-center w-24 h-24 rounded-full mb-4 ${item.bg}`}
            >
              {item.icon}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug text-center break-words whitespace-normal w-full">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
