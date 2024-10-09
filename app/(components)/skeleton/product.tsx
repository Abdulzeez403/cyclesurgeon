import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="block p-4 border rounded-lg cursor-pointer animate-pulse">
      <div className="relative w-full h-52 mb-4 bg-gray-200 rounded-lg"></div>
      <div className="info">
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center text-sm mb-2">
          <div className="w-16 h-3 bg-gray-200 rounded mr-1"></div>
          <div className="ml-2 w-12 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
