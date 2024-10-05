import React from "react";
import Image from "next/image";

interface IProp {
  title: string;
  img: string;
}

export const CategoryCard = ({ title, img }: IProp) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-4 px-4 border-slate-200 hover:border-slate-600 rounded-full overflow-hidden w-[100px] h-[100px] md:w-[135px] md:h-[135px] lg:w-[135px] lg:h-[135px] flex justify-center items-center">
        <Image
          src={img}
          alt="categoryImage"
          layout="responsive"
          objectFit="cover"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      <p className="text-center mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
        {title}
      </p>
    </div>
  );
};
