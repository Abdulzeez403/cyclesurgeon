import React from "react";
import shoesImage from "../../../public/bicycle-promotion.png";
import Image from "next/image";

const PromotionalBanner = () => {
  return (
    <div className="relative mx-0 md:mx-40 lg:mx-40 py-6">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg shadow-lg">
        <div className="flex-1 p-4 text-center md:text-left">
          <p className="text-sm text-gray-700 font-medium">
            Perfect Quality Brand Sport helmet
          </p>
          <h1 className="text-3xl md:text-4xl font-bold my-4">
            Festival Season Offer Available
          </h1>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            DISCOVER NOW
          </a>
        </div>

        <div className=" p-4 w-50 h-30">
          <Image
            src={shoesImage}
            alt="Sport Shoes"
            className="w-full h-auto rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
