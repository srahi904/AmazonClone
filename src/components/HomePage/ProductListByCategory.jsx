/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductGrid from "./ProductGrid"; // Reusing the ProductGrid component

const ProductListByCategory = () => {
  const { categoryName } = useParams(); // Get the category name from URL params
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products for the selected category
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Products in {categoryName}</h2>
      <ProductGrid isHomePage={false} products={products} />
    </div>
  );
};

export default ProductListByCategory;
