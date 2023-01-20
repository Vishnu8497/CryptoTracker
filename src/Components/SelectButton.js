import React from "react";
import "./SelectButton.css";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="selectButton"
      style={{
        color: selected ? "black" : "",
        backgroundColor: selected ? "orange" : "",
        fontWeight: selected ? 700 : 500,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
