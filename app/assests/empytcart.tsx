import React from "react";

const EmptyCartSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-24 h-24 text-gray-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3h16.5M3.75 3l1.28 14.167c.04.443.403.833.855.833h12.23c.452 0 .815-.39.855-.833L20.25 3m-16.5 0L6 19.5m0 0h12M6 19.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 01-1.5-1.5M9 8.25h6m-7.5 3h9"
    />
  </svg>
);

export default EmptyCartSVG;
