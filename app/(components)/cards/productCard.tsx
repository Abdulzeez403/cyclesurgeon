import React from "react";
import Image from "next/image";

interface ProductCardProps {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  // rating: number;
  reviews?: number;
  badgeText?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  imgSrc,
  alt,
  title,
  price,
  oldPrice,
  discount,
  // rating,
  reviews,
  badgeText,
}) => {
  return (
    <a
      href={href}
      className="block p-4 border rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out"
    >
      <div className="relative w-full h-52 mb-4">
        <Image
          src={imgSrc}
          alt={alt}
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
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
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
    </a>
  );
};

export default ProductCard;
