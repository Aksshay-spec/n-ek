"use client";

import Image from "next/image";
import { FaHandshake, FaChartLine, FaBoxOpen } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import React from "react";

// If you want props later, define an interface here (currently unused)
interface PartnerWithUsSectionProps {}

export default function PartnerWithUsSection({}: PartnerWithUsSectionProps) {
  return (
    <section className="bg-white py-10 px-6 text-center">
      <h2 className="text-3xl font-extrabold text-black">Partner With Us</h2>
      <p className="text-lg font-semibold text-gray-800 mt-1">
        Vendors &amp; Distributors
      </p>

      <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2 mb-6 rounded-full"></div>

      <div className="flex justify-center mb-6">
        <div className="bg-[#ff6b6b]/90 p-8 rounded-full flex items-center justify-center">
          <IoStorefrontOutline className="text-white text-7xl" />
        </div>
      </div>

      <h3 className="text-3xl font-semibold text-[#11284b] mb-6">
        Vendor Benefits
      </h3>

      <div className="grid grid-cols-3 gap-10 mb-6 text-center">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#e0fafa] border-2 border-[#ff6b6b] rounded-2xl p-6 flex items-center justify-center shadow-sm w-24 h-24">
            <FaHandshake className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-medium text-black text-xs mt-3">
            87% Vendor Retention
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#e0fafa] border-2 border-[#ff6b6b] rounded-2xl p-6 flex items-center justify-center shadow-sm w-24 h-24">
            <FaChartLine className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-medium text-black text-xs mt-3">
            Co-development &amp; R&amp;D support
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#e0fafa] border-2 border-[#ff6b6b] rounded-2xl p-6 flex items-center justify-center shadow-sm w-24 h-24">
            <FaBoxOpen className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-medium text-black text-xs mt-3">
            Zero product recall record
          </p>
        </div>
      </div>

      <button className="bg-[#ff6b6b] hover:bg-[#ff4a4a] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300">
        Join Us As Vendor
      </button>
    </section>
  );
}
