/** @format */

import { createContext, useState, useContext } from "react";

// Create Context
const ShopContext = createContext();

// Custom Hook to use Context
export const useShop = () => useContext(ShopContext);

// Provider Component
export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
