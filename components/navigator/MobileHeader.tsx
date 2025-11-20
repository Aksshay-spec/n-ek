"use client";

import React from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  return (
    <>
      {/* TOP SOCIAL MEDIA SECTION */}
      <div className="w-full bg-white border-b border-gray-200">
        <nav className="flex justify-between items-center px-6 h-[40px]">
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <IoIosCall />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <FaXTwitter />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <FaInstagram />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <FaFacebook />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <FaYoutube />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <ImWhatsapp />
          </Link>

          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            href="#"
          >
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* MAIN LOGO NAVIGATION */}
      <nav className="sticky top-0 w-full bg-white/30 backdrop-blur-md shadow-md z-[1000]">
        <div className="flex justify-between items-center px-6 h-[40px]">
          <Link href="/">
            <img
              src="/images/ekjahan-bg.png"
              alt="Ekjahan Enterprises"
              className="h-[40px] object-contain transition-all hover:scale-105"
            />
          </Link>

          <Link href="/">
            <img
              src="/images/ekjahpar-bg.png"
              alt="Partnership"
              className="h-[40px] object-contain transition-all hover:scale-105"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;
