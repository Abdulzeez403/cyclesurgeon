import React from "react";
import Image from "next/image";

interface IProp {
  title: string;
  img: string;
}

export const CategoryCard = ({ title, img }: IProp) => {
  return (
    <div>
      <div>
        <div className="border-2 border-slate-400 rounded-full overflow-hidden">
          <Image
            src={img}
            width={80}
            height={80}
            alt="categoryImage"
            className="rounded-full"
          />
        </div>

        <p className="text-center">{title}</p>
      </div>
    </div>
  );
};
