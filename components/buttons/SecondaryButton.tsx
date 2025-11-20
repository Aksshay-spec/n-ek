"use client";

import React from "react";

interface SecondaryButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  className?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  bgColor = "#ff5e5e",
  textColor = "white",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className={`
        px-5 py-2 sm:px-6 sm:py-3
        rounded-full font-semibold transition
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
