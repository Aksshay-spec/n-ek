"use client";

import Image from "next/image";
import { FaFireExtinguisher } from "react-icons/fa";

export default function FmcgSection() {
  return (
    <section className="bg-white py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black">
        Ekjahan FMCG
      </h2>

      <p className="text-lg font-semibold text-gray-800">
        Powering Every Connection
      </p>

      <div className="w-32 h-[6px] bg-[#FFD22F] mx-auto mt-2 rounded-full"></div>

      <p className="max-w-xl mx-auto mt-6 text-gray-700 text-base leading-relaxed">
        Essential goods crafted with care for Indian kitchens and stores.
      </p>

      <div className="mt-10">
        <Image
          src="/images/3.png" 
          alt="Ekjahan FMCG Products"
          width={500}
          height={500}
          className="mx-auto w-full max-w-[500px] object-contain rounded-xl"
        />
      </div>
    </section>
  );
}
