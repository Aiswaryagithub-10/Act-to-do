import React from "react";

const Card = ({ bgcolor, title, subtitle, className }) => {
    console.log("className:", className); // Debugging
    return (
      <div
        style={{ backgroundColor: bgcolor }}
        className={`text-white px-10 py-5 border rounded-md text-center flex-grow ${className || ""}`}
      >
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{subtitle}</p>
      </div>
    );
  };
  export default Card;
