/** @format */

import React from "react";
import { useCart } from "../../hooks/useCart";

const CartItemList = ({ items }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain mr-4"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
