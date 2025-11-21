"use client";

import React from "react";
import { FaBoxOpen, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { PiFireExtinguisher } from "react-icons/pi";
import { IconType } from "react-icons/lib";

// Type for each listing item
interface ListingItem {
  icon: JSX.Element;
  bgColor: string;
  title: string;
  description: string;
}

// Listings array with type
const listings: ListingItem[] = [
  {
    icon: <FaBoxOpen className="text-white text-4xl" />,
    bgColor: "bg-[#ff6b6b]",
    title: "150+",
    description: "Modular SKUs (Switches, Sockets, MCBs, Regulators)",
  },
  {
    icon: <FaLightbulb className="text-white text-4xl" />,
    bgColor: "bg-[#3CEAC6]",
    title: "1,200+",
    description: "Used in 1,200+ housing projects",
  },
  {
    icon: <FaShieldAlt className="text-white text-4xl" />,
    bgColor: "bg-[#ff6b6b]",
    title: "12-Year",
    description: "12-Year Warranty (10+2 years on online registration)",
  },
  {
    icon: <PiFireExtinguisher className="text-white text-4xl" />,
    bgColor: "bg-[#3CEAC6]",
    title: "Fire Safety",
    description: "Fire-Safe & Smart Home Compatible",
  },
];

export default function AboutListings(): JSX.Element {
  return (
    <section className="py-12 px-6 sm:px-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {listings.map((item, index) => (
          <div
            key={index}
            className="flex items-center rounded-2xl shadow-md bg-[#f5f5f5] hover:shadow-lg transition"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-2xl ${item.bgColor} mr-5 shrink-0`}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-black mb-1">
                {item.title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-base leading-snug">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
