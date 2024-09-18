import { CategoryCard } from "@/app/(components)/cards/categoryCard";
import { categoryImage } from "@/app/constant/category";
import React from "react";

export const HomeCategory = () => {
  return (
    <div className="">
      <div className=" mx-0 md:mx-40 lg:mx-40">
        <div className="container mx-auto px-4 py-8">
          <h4 className="font-bold p-4 pb-0 text-lg">Categories</h4>
          <div className="flex gap-10 items-center p-4">
            {categoryImage.map((c, index) => (
              <CategoryCard key={index} img={c.img} title={c.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
