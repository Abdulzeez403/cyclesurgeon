"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { carouselImage } from "@/app/constant/carousel";

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]); // Re-run the effect when index or hover state changes

  return (
    <div
      className="relative w-full max-w-[800px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-[300px] md:h-[400px]">
        <Image
          src={carouselImage[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill" // This makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the container and maintains aspect ratio
        />
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};
