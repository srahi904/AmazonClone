/** @format */

import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
// import { useCart } from "../../hooks/useCart";
// import { useWishlist } from "../../context/WishlistContext";

const ProductDetails = ({ product }) => {
  // const { addToCart } = useCart();
  // const { addToWishlist } = useWishlist();

  const rating = product.rating || { rate: 0, count: 0 };

  // 🔁 Safe way to render unique elements in a list
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1 text-yellow-500">
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {halfStar && <FaStarHalfAlt key="half" />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          {product.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-3xl font-bold text-orange-600 mb-4">
          ${product.price.toFixed(2)}
        </p>

        {/* Category */}
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Category:</span>
          <span className="ml-2 px-3 py-1 bg-blue-200 text-blue-900 text-sm font-semibold rounded-lg">
            {product.category?.name || "Uncategorized"}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="font-semibold text-gray-700 mr-2">Rating:</span>
          {renderStars(rating.rate)}
          <span className="ml-2 text-gray-600 text-sm">
            {rating.rate.toFixed(1)} ({rating.count} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow"
          >
            Add to Wishlist
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ProductDetails;
