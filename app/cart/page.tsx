"use client";

import React, { useState } from "react";
import CartItem from "../(components)/cart";
import CartSummary from "../(components)/cart/checkout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "NIVEA Watimagbo Pack",
      image: "https://ng.jumia.is/unsafe/fit-in/150x150/product.jpg",
      price: 9375,
      oldPrice: 13050,
      discount: 28,
      seller: "Jumia",
      quantity: 3,
      isFewUnitsLeft: true,
    },

    {
      id: "2",
      name: "NIVEA Watimagbo Pack",
      image: "https://ng.jumia.is/unsafe/fit-in/150x150/product.jpg",
      price: 9375,
      oldPrice: 13050,
      discount: 28,
      seller: "Jumia",
      quantity: 3,
      isFewUnitsLeft: true,
    },
  ]);

  const subtotal = 28125; // Replace with dynamic data from your cart state
  const checkoutLink = "/checkout/summary/";

  const handleRemove = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <div className="px-2 md:px-40  lg:px-40 pt-6">
      <div className="block md:flex lg:flex gap-10">
        <div className="w-full md:w-3/4 lg:w-3/4">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-lg font-semibold">Cart 5</h2>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          ))}
        </div>

        <div className="w-full md:w-1/4 lg:w-1/4">
          <CartSummary subtotal={subtotal} checkoutLink={checkoutLink} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
