import React from "react";

const Card = ({ bgcolor, title, subtitle, className }) => {
    console.log("className:", className); // Debugging
    return (
      <div
        style={{ backgroundColor: bgcolor }}
        className={`text-white pl-28 pr-28 pt-4  pb-4 rounded-lg ${className || ""}`}
      >
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{subtitle}</p>
      </div>
    );
  };
  export default Card;
