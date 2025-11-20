"use client";

import React from "react";

interface CustomButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({
  label,
  bgColor = "#9efff2",
  textColor = "black",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        mt-10 font-bold py-3 px-8 rounded-2xl shadow-md hover:opacity-90 transition
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
