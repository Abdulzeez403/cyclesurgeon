import ProductCard from "@/app/(components)/cards/productCard";
import { ProductCardProps, productsData } from "@/app/constant/products";
import React from "react";

const HomeProduct = () => {
  return (
    <div className=" mx-0 md:mx-40 lg:mx-40 py-6">
      <h4 className="font-bold text-lg">Product</h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product: ProductCardProps, index: number) => (
          <ProductCard
            key={index}
            href={product.href}
            imgSrc={product.imgSrc}
            alt={product.alt}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            //   rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
