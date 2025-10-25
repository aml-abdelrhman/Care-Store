import React from "react";

const Button = ({ text, onClick, type = "primary", className }) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition";

  const typeStyles = {
    primary: "bg-[#bfa17a] text-white hover:bg-[#a78b65]",
    secondary: "bg-white text-[#bfa17a] border border-[#bfa17a] hover:bg-[#e6decf]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${typeStyles[type]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
