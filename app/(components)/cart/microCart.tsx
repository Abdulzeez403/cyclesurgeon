"use client";
import { CartItem } from "@/app/constant/products";
import { removeItem, updateItem } from "@/app/redux/cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface CartItemComponentProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateItem({ ...item, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateItem({ ...item, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="flex justify-between items-center mb-4 p-2 border-b">
      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-600">
          Price: ₦{item.price?.toLocaleString() || "N/A"} | Quantity:
          {item.quantity}
        </p>
      </div>
      <div className="flex items-center">
        <button onClick={handleDecrease} className="bg-gray-300 p-2 rounded-l">
          -
        </button>
        <span className="w-12 text-center border-t border-b">
          {item.quantity}
        </span>
        <button onClick={handleIncrease} className="bg-gray-300 p-2 rounded-r">
          +
        </button>
      </div>
      <button
        onClick={handleRemove}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItemComponent;
