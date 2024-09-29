import React from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export interface CartItemComponentProps {
  item: CartItem;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({
  item,
  setCartItems,
}) => {
  const handleDecreaseQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: Math.max(1, prevItem.quantity - 1) }
          : prevItem
      )
    );
  };

  const handleIncreaseQuantity = () => {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  const handleRemoveItem = () => {
    setCartItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  };

  return (
    <div className="flex justify-between items-center mb-4 p-2 border-b">
      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-600">Price: ₦{item.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleDecreaseQuantity}
          className="bg-gray-300 p-2 rounded-l"
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) =>
            setCartItems((prevItems) =>
              prevItems.map((prevItem) =>
                prevItem.id === item.id
                  ? { ...prevItem, quantity: Math.max(1, +e.target.value) }
                  : prevItem
              )
            )
          }
          className="w-12 text-center border-t border-b"
        />
        <button
          onClick={handleIncreaseQuantity}
          className="bg-gray-300 p-2 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={handleRemoveItem}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItemComponent;
