import { CategoryCard } from "@/app/(components)/cards/categoryCard";
import { categoryImage } from "@/app/constant/category";
import React from "react";

export const HomeCategory = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h4 className="font-bold p-4 pb-0 text-lg">Categories</h4>
        <div className="flex gap-10 items-center p-4">
          {categoryImage.map((c, index) => (
            <CategoryCard key={index} img={c.img} title={c.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
