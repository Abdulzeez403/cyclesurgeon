import React from "react";

const BicyclePedal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      {/* Pedal Body */}
      <rect
        x="50"
        y="70"
        width="100"
        height="60"
        fill="#888"
        stroke="#333"
        strokeWidth="5"
        rx="10"
      />

      {/* Pedal Bearings */}
      <circle cx="50" cy="100" r="10" fill="#444" />
      <circle cx="150" cy="100" r="10" fill="#444" />

      {/* Pedal Axis */}
      <rect
        x="95"
        y="30"
        width="10"
        height="40"
        fill="#666"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Grips */}
      <line x1="60" y1="80" x2="140" y2="80" stroke="#555" strokeWidth="5" />
      <line x1="60" y1="90" x2="140" y2="90" stroke="#555" strokeWidth="5" />
      <line x1="60" y1="110" x2="140" y2="110" stroke="#555" strokeWidth="5" />
      <line x1="60" y1="120" x2="140" y2="120" stroke="#555" strokeWidth="5" />
    </svg>
  );
};

export default BicyclePedal;
