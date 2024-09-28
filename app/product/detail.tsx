"use client";
import React from "react";
import ProductCard from "@/app/(components)/cards/productCard";
import { ProductCardProps, productsData } from "@/app/constant/products";
import Link from "next/link";

const ProductPage = () => {
  return (
    <div className="relative mx-0 md:mx-40 lg:mx-40 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2">
        {productsData.map((product: ProductCardProps, index: number) => (
          <div key={index} className="px-2">
            <Link href={`/product/${index}`}>
              <ProductCard
                id={product.id}
                images={product.images}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                reviews={product.reviews}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
