/** @format */

import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useOrders } from "../../hooks/useOrders";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ nextStep, prevStep, onSuccess }) => {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { cardNumber, cardName, expiryDate, cvv } = paymentInfo;

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      setErrorMessage("Card number must be 16 digits.");
      return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
      setErrorMessage("CVV must be 3 digits.");
      return false;
    }

    // ✅ Expiry Date Validation (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setErrorMessage("Expiry date must be in MM/YY format.");
      return false;
    }

    const [month, year] = expiryDate.split("/").map(Number);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setErrorMessage("Card is expired.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Current cart", cart);

    setErrorMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const orderDetails = {
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        products: cart.map((product) => ({
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          link: product.link,
        })),
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(orderDetails);
      localStorage.setItem("orders", JSON.stringify(orders));

      addOrder(orderDetails.products);

      clearCart();

      if (onSuccess) onSuccess();

      navigate("/checkout");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>

      {errorMessage && (
        <div className="bg-red-100 text-red-800 p-2 rounded">
          {errorMessage}
        </div>
      )}

      <input
        type="text"
        name="cardNumber"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="cardName"
        value={paymentInfo.cardName}
        onChange={handleChange}
        placeholder="Name on Card"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="expiryDate"
        value={paymentInfo.expiryDate}
        onChange={handleChange}
        placeholder="MM/YY"
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="cvv"
        value={paymentInfo.cvv}
        onChange={handleChange}
        placeholder="CVV"
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 cursor-pointer text-white p-2 rounded"
      >
        {isSubmitting ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
