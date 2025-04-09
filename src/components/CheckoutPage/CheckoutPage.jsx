/** @format */

import React, { useState, useEffect } from "react";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0 && !orderPlaced) {
      navigate("/cart");
    }
  }, [cart, orderPlaced, navigate]);

  const handlePaymentSuccess = () => {
    setShowConfetti(true);
    setOrderPlaced(true);
    clearCart(); // Optional: Clear cart on success

    setTimeout(() => {
      setShowConfetti(false);
      navigate("/order");
    }, 6000); // 6 seconds of party is enough
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {showConfetti && <Confetti />}

      {orderPlaced ? (
        <div className="text-center text-2xl font-bold text-green-600 bg-white p-6 rounded-lg shadow-lg animate-fade-in">
          <p className="text-4xl mb-4">🎉 Thank You for Your Order! 🎉</p>
          <p className="text-lg text-gray-700">
            Redirecting to order history...
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Checkout</h1>

          <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="md:w-2/3">
              {step === 1 && <ShippingForm nextStep={nextStep} />}
              {step === 2 && (
                <PaymentForm
                  nextStep={nextStep}
                  prevStep={prevStep}
                  onSuccess={handlePaymentSuccess}
                />
              )}
            </div>

            <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg shadow-md">
              <OrderSummary />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
