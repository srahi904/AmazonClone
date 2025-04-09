/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-amazon-orange hover:bg-amazon-orange-dark  font-bold py-2 px-4 rounded"
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
