import React from "react";

interface CartSummaryProps {
  subtotal: number;
  checkoutLink: string;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  checkoutLink,
}) => {
  return (
    <div className=" ">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h1 className="font-semibold text-lg border-b pb-2">CART SUMMARY</h1>
        <div className="flex justify-between items-center my-2">
          <p className="text-base">Subtotal</p>
          <p className="text-xl text-right">₦ {subtotal.toLocaleString()}</p>
        </div>
        <p className="text-gray-500 text-sm pb-2">
          Delivery fees not included yet.
        </p>
        <div className="mt-4">
          <a
            href={checkoutLink}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Checkout (₦ {subtotal.toLocaleString()})
          </a>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 mt-4">
        <h2 className="font-medium text-md pb-2">Returns are easy</h2>
        <p className="text-sm">
          Free return within 7 days for ALL eligible items
        </p>
        <button
          className="text-blue-500 text-sm mt-2 underline"
          data-pop-trig="def"
          data-pop-open="returns"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
