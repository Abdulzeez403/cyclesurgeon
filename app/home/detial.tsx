import { HeroCarousel } from "@/app/(components)/carousels/heroCarousel";
import React from "react";
import { HomeCategory } from "./_components/categorys";
import HomeNewArrivalProduct from "./NewArrivalProduct/detail";
import PromotionalBanner from "./promotions/detail";
import HomeProduct from "./product/detail";
export const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <HomeCategory />
      <HomeNewArrivalProduct />
      <PromotionalBanner />
      <HomeProduct />
    </div>
  );
};
