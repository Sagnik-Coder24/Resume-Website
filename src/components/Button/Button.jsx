import React from "react";
import "./Button.css";

const Button = ({ text, width }) => {
  return (
    <button className="btn" style={width ? { width: width } : null}>
      {text}
    </button>
  );
};

export default Button;
