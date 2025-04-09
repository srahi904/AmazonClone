/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch 50 products from the EscuelaJS API
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data.slice(0, 50)); // Limit to first 50 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`} // Dynamic routing to individual product page
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={product.images[0]} // Assuming images array has the image URLs
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 truncate">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-2 truncate">{product.description}</p>
          <p className="text-xl font-bold text-amazon-orange">
            ${product.price.toFixed(2)}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
