"use client";
import { HeroCarousel } from "@/app/(components)/carousels/heroCarousel";
import React, { useEffect, useState } from "react";
import { HomeCategory } from "./_components/categorys";
import HomeNewArrivalProduct from "./NewArrivalProduct/detail";
import PromotionalBanner from "./promotions/detail";
import HomeProduct from "./product/detail";
import { ProductCardProps } from "../constant/products";
import { supabase } from "@/lib/supabaseClient";
export const HomePage = () => {
  const [products, setProducts] = useState<ProductCardProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("products").select("*");
        if (error) throw error;
        setProducts(data as ProductCardProps[]);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching products:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <HeroCarousel />
      <HomeCategory />
      <HomeNewArrivalProduct products={products as any} loading={loading} />
      <PromotionalBanner />
      <HomeProduct products={products as any} loading={loading} />
    </div>
  );
};
