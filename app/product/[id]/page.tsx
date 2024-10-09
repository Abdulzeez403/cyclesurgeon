"use client";
import { CartItem, ProductCardProps } from "@/app/constant/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/redux/cart/cartSlice";

const ProductDetailPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extracting the product ID from the URL

  const [product, setProduct] = useState<ProductCardProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        ...product,
        image: product.images[0],
        quantity: 1,
      };
      dispatch(addItem(cartItem)); // Add to cart
    }
  };

  // Fetch the product details from Supabase
  const fetchProductDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("products") // Change to your actual table name
        .select("*")
        .eq("id", id) // Assuming 'id' is the column name in your table
        .single(); // Fetch a single record

      if (error) {
        throw new Error(error.message);
      }

      setProduct(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // If loading, display loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  // If error, display error message
  if (error) {
    return <p>Error: {error}</p>;
  }

  // If no product is found, render an error message
  if (!product) {
    return <p>Product not found</p>;
  }

  // Handle the thumbnail click to change the selected image
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Handle the next and previous image navigation
  const handleNextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center mx-auto p-4">
      <div className="w-[80%]">
        <div className="flex justify-between">
          {/* Left: Main Image with Slider */}
          <div className=" relative  ">
            <div className="flex justify-between items-center mb-2 md:hidden lg:hidden">
              <button
                onClick={handlePrevImage}
                className="text-blue-600 hover:text-blue-700"
              >
                Prev
              </button>
              <button
                onClick={handleNextImage}
                className="text-blue-600 hover:text-blue-700"
              >
                Next
              </button>
            </div>
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="rounded-lg shadow-lg w-96 h-auto"
              width={300}
              height={300}
              priority={true} // Ensures the image is prioritized for loading
            />
          </div>

          {/* Right: Product Information */}
          <div className="lg:w-1/2 pl-6">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-semibold mb-4">
              ${product.price}
            </p>

            <p className="text-gray-600 mb-6">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-semibold transition duration-200 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Thumbnails positioned below the main image */}
        <div className="mt-4 hidden md:flex lg:flex">
          <div>
            <h4 className="text-lg font-semibold mb-2">Other Images</h4>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image: string, index: number) => (
                <Thumbnail
                  key={index}
                  image={image}
                  productName={product.name}
                  isSelected={selectedImageIndex === index}
                  onSelect={() => handleThumbnailClick(index)} // Change the main image on click
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Thumbnail component for product images
const Thumbnail: React.FC<{
  image: string;
  productName: string;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ image, productName, isSelected, onSelect }) => (
  <div className="flex-shrink-0 cursor-pointer">
    <img
      src={image}
      alt={`${productName}`}
      className={`w-24 h-24 object-cover rounded-lg border transition duration-200 ease-in-out ${
        isSelected ? "border-blue-600" : "hover:border-blue-500"
      }`}
      onClick={onSelect}
    />
  </div>
);

export default ProductDetailPage;
