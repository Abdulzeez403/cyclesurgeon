"use client";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import ProductCard from "@/app/(components)/cards/productCard";
import { ProductCardProps, productsData } from "@/app/constant/products";
import Link from "next/link";

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 cursor-pointer z-10
       bg-yellow-400 p-2 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-black hover:text-blue-700 "
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

// Custom Previous Arrow with proper typing
const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 cursor-pointer z-10 bg-yellow-400 p-2 rounded-full"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8 text-black hover:text-blue-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const HomeNewArrivalProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of products to show on large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative mx-0 md:mx-40 lg:mx-40 py-6">
      <h4 className="font-bold text-lg py-4 pl-2">New Arrival</h4>
      <Slider {...settings}>
        {productsData.map((product: ProductCardProps, index: number) => (
          <div key={index} className="px-2">
            <Link href={`product/${index}`}>
              <ProductCard
                imgSrc={product.imgSrc}
                alt={product.alt}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                reviews={product.reviews}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeNewArrivalProduct;
