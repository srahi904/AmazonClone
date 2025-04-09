/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const OrderSummary = () => {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <div className="divide-y divide-gray-200 space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center pt-2">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain rounded border"
              />
              <div>
                <h3 className="font-semibold text-sm">{item.title}</h3>

                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded"
                  >
                    -
                  </button>
                  <span className="mx-2 text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-sm rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <span className="font-semibold text-sm">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-green-600 font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base border-t pt-3">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
        <h3 className="font-semibold text-sm mb-1">Estimated Delivery:</h3>
        <p className="text-sm">{getEstimatedDeliveryDate()}</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg mt-6 transition duration-300"
      >
        Place Your Order
      </button>
    </div>
  );
};

const getEstimatedDeliveryDate = () => {
  const today = new Date();
  const deliveryDate = new Date(today.setDate(today.getDate() + 3));
  return deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

export default OrderSummary;
