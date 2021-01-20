import React from "react";

const Button = ({ onClick, className, text, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
