import React from "react";
import Image from "next/image";

interface IProp {
  title: string;
  img: string;
}

export const CategoryCard = ({ title, img }: IProp) => {
  return (
    <div className="flex flex-col items-center">
      {/* Responsive image container */}
      <div className="border-2 border-slate-400 rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Image
          src={img}
          alt="categoryImage"
          layout="responsive"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-center mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
        {title}
      </p>
    </div>
  );
};
