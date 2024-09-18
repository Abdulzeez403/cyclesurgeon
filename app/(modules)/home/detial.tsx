import { HeroCarousel } from "@/app/(components)/carousels/heroCarousel";
import React from "react";
import { HomeCategory } from "./_components/categorys";
import HomeProduct from "../product/detail";
export const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <HomeCategory />
      <HomeProduct />
    </div>
  );
};
