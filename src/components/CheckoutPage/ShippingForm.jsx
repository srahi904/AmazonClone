/** @format */
import React, { useState } from "react";

const ShippingForm = ({ nextStep }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the form and save the shipping info
    console.log("Shipping info:", shippingInfo);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
      <div>
        <label htmlFor="fullName" className="block mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={shippingInfo.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="address" className="block mb-1">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="city" className="block mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={shippingInfo.city}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="postalCode" className="block mb-1">
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={shippingInfo.postalCode}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="country" className="block mb-1">
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={shippingInfo.country}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white  cursor-pointer border  font-bold py-2 px-4 rounded"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default ShippingForm;
