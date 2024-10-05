"use client";
import React, { useRef, useState, useEffect } from "react";
import { CategoryCard } from "@/app/(components)/cards/categoryCard";
import { categoryImage } from "@/app/constant/category";
import Link from "next/link";

// Define the HomeCategory component
export const HomeCategory: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null); // TypeScript ref for the scrollable div
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false); // State to handle left arrow visibility
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true); // State to handle right arrow visibility

  // Function to handle scrolling
  const handleScroll = (direction: "left" | "right"): void => {
    const scrollAmount = 200; // Adjust scroll amount

    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to check scroll position and update arrow visibility
  const handleScrollPosition = (): void => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Add event listener to check scroll position on load
  useEffect(() => {
    handleScrollPosition();
    // Re-check scroll position when the window resizes
    window.addEventListener("resize", handleScrollPosition);
    return () => {
      window.removeEventListener("resize", handleScrollPosition);
    };
  }, []);

  return (
    <div className="">
      <div className=" md:mx-20 lg:mx-40">
        <div className="container mx-auto px-4 py-4">
          <h4 className="font-bold p-4 pb-0 text-lg text-center">
            Shop by Categories
          </h4>

          {/* Scrollable container */}
          <div className="relative">
            {/* Left arrow (shows only if can scroll left) */}
            {canScrollLeft && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
                onClick={() => handleScroll("left")}
              >
                &#9664;
              </button>
            )}

            <div
              ref={scrollRef}
              onScroll={handleScrollPosition}
              className="flex gap-6 p-4 overflow-x-auto hidden-scrollbar scroll-smooth"
            >
              {categoryImage.map((c, index) => (
                <Link href={`/product`} key={index}>
                  <CategoryCard img={c.img} title={c.name} />
                </Link>
              ))}
            </div>

            {canScrollRight && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
                onClick={() => handleScroll("right")}
              >
                &#9654;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
