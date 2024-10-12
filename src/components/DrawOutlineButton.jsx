// src/components/DrawOutlineButton.jsx
import React from "react";
import "./DrawOutlineButton.css"; // Ensure to create this CSS file.

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className="draw-outline-button">
      <span>{children}</span>
      <span className="top-line" />
      <span className="right-line" />
      <span className="bottom-line" />
      <span className="left-line" />
    </button>
  );
};

export default DrawOutlineButton;
