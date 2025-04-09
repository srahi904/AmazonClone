/** @format */

import React from "react";
import { useCart } from "../../hooks/useCart";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import CheckoutButton from "./CheckoutButton";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <CartItemList items={cart} />
        </div>
        <div className="md:w-1/3">
          <CartSummary cart={cart} />
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// import React from 'react';
// import ShippingForm from './ShippingForm';
// import OrderSummary from './OrderSummary';
// import { useCart } from '../../hooks/useCart';

// const CheckoutPage = () => {
//   const { cart } = useCart();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Left Side: Address Form */}
//         <div className="md:w-2/3 bg-white border rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
//           <ShippingForm disabled={true} />
//         </div>

//         {/* Right Side: Order Summary */}
//         <div className="md:w-1/3">
//           <OrderSummary cart={cart} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
