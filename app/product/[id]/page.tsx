"use client";

import { AProduct, ProductCardProps } from "@/app/constant/products";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { usePathname } from "next/navigation";

// Define product type for better type safety
interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extracting the product ID from the URL

  const product: ProductCardProps | undefined = AProduct.find(
    (prod) => prod.id === id
  );

  // State to track selected image
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images[0] || ""
  );

  // If no product is found, render an error or fallback message
  if (!product) {
    return <p>Product not found</p>;
  }

  // Slider settings for sliding thumbnails
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller
        settings: {
          slidesToShow: 4,
          vertical: false, // On smaller screens, show horizontal sliding
        },
      },
      {
        breakpoint: 640, // Mobile and smaller
        settings: {
          slidesToShow: 3,
          vertical: false, // Horizontal sliding for mobile as well
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Thumbnails and Main Image */}
        <div className="flex flex-col lg:flex-row lg:w-1/2 gap-4">
          {/* Thumbnails */}
          <div className="w-full lg:w-1/4">
            <Slider {...settings}>
              {product.images.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className={`w-full h-24 lg:h-24 object-cover rounded-lg cursor-pointer border ${
                      selectedImage === image
                        ? "border-blue-500"
                        : "hover:border-blue-500"
                    } transition`}
                    onClick={() => setSelectedImage(image)} // Change the main image on click
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Main Product Image */}
          <div className="flex-1">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={product.name}
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
                priority={true} // Ensures the image is prioritized for loading
              />
            )}
          </div>
        </div>

        {/* Right: Product Information */}
        <div className="lg:w-1/2 pl-20">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 font-semibold mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            {product.stock ? (
              <span className="text-green-500 font-semibold">In Stock</span>
            ) : (
              <span className="text-red-500 font-semibold">Out of Stock</span>
            )}
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
