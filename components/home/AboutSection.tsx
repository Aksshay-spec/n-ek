"use client";

import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/2.png"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black Gradient Overlay */}
      <div
        className="absolute left-0 top-0 h-full w-[80%]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      {/* Content Section */}
      <div className="absolute left-0 top-0 w-[70%] h-full flex items-center">
        <div className="relative z-10 text-white max-w-lg pl-6 sm:pl-12 md:pl-20 space-y-4">
          <h2 className="text-xl md:text-5xl font-extrabold leading-snug relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-2 after:rounded-full after:mr-auto">
            Powering Homes <br /> Nourishing Lives
          </h2>

          <p className="text-base md:text-lg opacity-90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            potenti, nulla facilisi in aliquet pulvinar risus.
          </p>

          {/* <button className="mt-4 px-6 py-3 bg-[#ff4c4c] hover:bg-[#e03e3e] text-white font-semibold rounded-full transition">
            Join Us Today
          </button> */}
          <SecondaryButton
            label="Join Us Today"
            bgColor="#ff5e5e"
            textColor="white"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
