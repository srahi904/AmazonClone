/** @format */

import { useEffect, useState } from "react";

export const useOrders = () => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem("orders");
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (products) => {
    // Defensive check
    if (!Array.isArray(products)) {
      console.error(
        "❌ addOrder expects an array of products, but got:",
        products
      );
      return;
    }

    if (
      !products.every(
        (p) => p && typeof p === "object" && "id" in p && "title" in p
      )
    ) {
      console.warn("⚠️ Some products are missing required fields:", products);
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      products: products.map((product) => ({
        ...product,
        link: product.link || "/product-not-found", // Provide fallback
        quantity: product.quantity || 1,
      })),
      total: products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
        0
      ),
      paid: true,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return { orders, addOrder };
};
