"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaBriefcase, FaBars } from "react-icons/fa";
import React from "react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const MobileFooter: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Warranty", path: "/warranty", icon: <RiShieldCheckFill /> },
    { name: "Career", path: "/career", icon: <FaBriefcase /> },
    { name: "Menu", path: "/menu", icon: <FaBars /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-t-md flex justify-around items-center py-2 border-t border-gray-200 z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.name}
            href={item.path}
            className="flex flex-col items-center justify-center relative"
          >
            <div
              className={`transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-[#eb5a25] text-white p-3 rounded-full shadow-md -translate-y-3"
                  : "text-gray-500 text-xl"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
            </div>

            <span
              className={`mt-1 mb-2 text-xs font-medium ${
                isActive ? "text-[#eb5a25]" : "text-gray-500"
              }`}
            >
              {item.name}
            </span>

            {isActive && (
              <div className="absolute bottom-0 h-[3px] w-8 bg-[#eb5a25] rounded-full mt-1"></div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileFooter;
