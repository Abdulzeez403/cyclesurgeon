"use client";

import React from "react";
import CartItem from "../(components)/cart";
import CartSummary from "../(components)/cart/checkout";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItem } from "../redux/cart/cartSlice";
import { CartItem as CartIProps } from "../constant/products";

const Cart = () => {
  const dispatch = useDispatch();

  // Selector to get cart items from the Redux store
  const cartItems = useSelector(
    (state: { cart: { items: CartIProps[] } }) => state.cart.items
  );

  // Handler to remove an item from the cart
  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  // Handler to increase quantity
  const handleIncreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity < 10) {
      dispatch(updateItem({ ...item, quantity: item.quantity + 1 }));
    }
  };

  // Handler to decrease quantity
  const handleDecreaseQuantity = (id: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateItem({ ...item, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
      handleRemove(id);
    }
  };

  return (
    <div className="px-2 md:px-40  lg:px-40 pt-6">
      <div className="block md:flex lg:flex gap-10">
        <div className="w-full md:w-3/4 lg:w-3/4">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-lg font-semibold">Cart {cartItems?.length}</h2>
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
          <CartSummary subtotal={2000} checkoutLink={"/cs-admin"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
