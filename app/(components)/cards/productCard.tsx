import React from "react";
import Image from "next/image";
import { ProductCardProps } from "@/app/constant/products";

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  name,
  price,
  oldPrice,
  discount,
  reviews,
  badgeText,
}) => {
  return (
    <div className="block p-4 border rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer">
      <div className="relative w-full h-52 mb-4">
        <Image
          src={images[0]}
          alt={images[0]}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {badgeText && (
          <span className="absolute top-2 left-2 px-2 py-1 text-sm text-white bg-orange-600 rounded-full">
            {badgeText}
          </span>
        )}
      </div>
      <div className="info">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        <div className="text-xl font-bold text-gray-900 mb-2">{price}</div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-gray-500 line-through">{oldPrice}</div>
          <div className="text-red-500 text-sm">{discount}% off</div>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <div className="relative w-16 h-3 bg-gray-300 rounded-full overflow-hidden mr-1">
              <div
                className="absolute left-0 top-0 h-full bg-yellow-400"
                // style={{ width: `${(rating / 5) * 100}%` }}
              ></div>
            </div>
            {/* <span>{rating} out of 5</span> */}
          </div>
          <span className="ml-2">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
