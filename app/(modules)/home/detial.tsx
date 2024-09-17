import { HeroCarousel } from "@/app/(components)/carousels/heroCarousel";
import React from "react";
import { HomeCategory } from "./_components/categorys";
export const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <HomeCategory />
    </div>
  );
};
