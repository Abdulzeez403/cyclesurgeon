"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/(components)/cards/productCard";
import { ProductCardProps } from "@/app/constant/products";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import ProductCardSkeleton from "../(components)/skeleton/product";

const ProductPage = () => {
  const [products, setProducts] = useState<ProductCardProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          setError(error.message);
          console.error("Error fetching products:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative mx-0 md:mx-40 lg:mx-40 py-6">
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="px-2">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Products grid */}
      {!loading && !error && products && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-2">
          {products.map((product: ProductCardProps, index: number) => (
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
      )}

      {/* No products found */}
      {!loading && !error && products?.length === 0 && (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductPage;
