"use client";

import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaSyncAlt, FaChartBar, FaTags } from "react-icons/fa";

const DistributorBenefitSection: React.FC = () => {
  return (
    <section className="py-12 flex flex-col items-center text-center px-6">
      {/* Top Icon */}
      <div className="bg-[#c9f7f5] p-8 rounded-full mb-6">
        <IoStorefrontOutline className="text-[#ff6b6b] text-6xl" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-[#1a2a4b] mb-10">
        Distributor Benefits
      </h2>

      {/* Benefit Cards */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {/* Card 1 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#ffd9d9] border-2 border-[#ff6b6b] rounded-2xl p-4 flex items-center justify-center">
            <FaSyncAlt className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-semibold text-black text-left text-sm">
            92% Reorder rate
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#ffd9d9] border-2 border-[#ff6b6b] rounded-2xl p-4 flex items-center justify-center">
            <FaChartBar className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-semibold text-black text-left text-sm">
            Digital dashboard &amp; WhatsApp support
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-4">
          <div className="bg-[#ffd9d9] border-2 border-[#ff6b6b] rounded-2xl p-4 flex items-center justify-center">
            <FaTags className="text-[#ff6b6b] text-4xl" />
          </div>
          <p className="font-semibold text-black text-left text-sm">
            Tiered pricing and territory exclusivity
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="mt-10 bg-[#9efff2] text-black font-bold py-3 px-8 rounded-2xl shadow-md hover:opacity-90 transition">
        Join Us As Distributor
      </button>
    </section>
  );
};

export default DistributorBenefitSection;
