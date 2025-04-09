/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";
import RelatedProducts from "./RelatedProducts";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Loading... - My Store";

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);

        // Update tab title when product is loaded
        document.title = `${response.data.title} - My Store`;
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
        document.title = "Product Not Found - My Store";
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <ProductImage image={product.images[0]} title={product.title} />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <ProductDetails product={product} />
          <AddToCartButton product={product} />
        </div>
      </div>
      <RelatedProducts
        category={product.category.name}
        currentProductId={product.id}
      />
    </div>
  );
};

export default ProductPage;
