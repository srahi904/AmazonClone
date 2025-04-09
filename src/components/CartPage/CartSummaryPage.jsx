/** @format */

import React from "react";
import OrderSummary from "../CheckoutPage/OrderSummary"; // Import the OrderSummary component
import { useCart } from "../../hooks/useCart"; // Import useCart to get cart data

const CartSummaryPage = () => {
  const { cart } = useCart(); // Get cart data from the context

  // If the cart is empty, show a message
  if (cart.length === 0) {
    return <div className="text-center mt-6">Your cart is empty!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cart Summary</h1>
      <OrderSummary cart={cart} />{" "}
      {/* Pass the cart data to the OrderSummary */}
    </div>
  );
};

export default CartSummaryPage;
