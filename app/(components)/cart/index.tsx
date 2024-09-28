import React from "react";

type CartItemProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  seller: string;
  quantity: number;
  isFewUnitsLeft: boolean;
  onRemove: (id: string) => void;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  image,
  price,
  oldPrice,
  discount,
  seller,
  quantity,
  isFewUnitsLeft,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <div className="py-3">
      <div className="bg-white shadow-md rounded-lg">
        <div className="flex p-4">
          <a className="flex-1 flex" href={`/product/${id}`}>
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={name}
                width={72}
                height={72}
                className="object-cover rounded"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-md font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Seller:</span> {seller}
              </p>
              {isFewUnitsLeft && (
                <p className="text-sm text-red-500">Few units left</p>
              )}
            </div>
            <div className="ml-4 text-right">
              <div className="text-lg font-bold">
                ₦ {price.toLocaleString()}
              </div>
              <div className="flex justify-end items-center">
                <div className="line-through text-gray-500">
                  ₦ {oldPrice.toLocaleString()}
                </div>
                <span className="ml-2 text-red-600 font-semibold">
                  {discount}%
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-between items-center p-4 border-t">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => onRemove(id)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 inline-block mr-1">
              <use href="#delete"></use>
            </svg>
            Remove
          </button>
          <div className="flex items-center">
            <button
              type="button"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              aria-label="decrease cart quantity"
              onClick={() => onDecreaseQuantity(id)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <use href="#remove"></use>
              </svg>
            </button>
            <span className="mx-2 text-lg">{quantity}</span>
            <button
              type="button"
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              aria-label="increase cart quantity"
              onClick={() => onIncreaseQuantity(id)}
              disabled={quantity === 10}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <use href="#add"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
