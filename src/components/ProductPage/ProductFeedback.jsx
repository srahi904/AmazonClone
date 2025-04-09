/** @format */

import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ProductFeedback from "./ProductFeedback"; // Feedback Form Component
import RelatedProducts from "./RelatedProducts"; // Related Products Component
import { useAuth } from "../../context/AuthContext";

const ProductDetails = ({ product }) => {
  const rating = product.rating || { rate: 0, count: 0 };
  const { user } = useAuth;

  // State to store customer reviews
  const [reviews, setReviews] = useState([]);

  // Fetch product reviews (mocking API fetch)
  useEffect(() => {
    // Simulated API call (Replace with real API)
    const fetchReviews = async () => {
      const fakeReviews = [
        { username: "JohnDoe", rating: 4, comment: "Great product, loved it!" },
        { username: "AliceW", rating: 5, comment: "Absolutely fantastic!" },
        {
          username: "Mark21",
          rating: 3,
          comment: "Good, but could be better.",
        },
      ];
      setReviews(fakeReviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Product Title */}
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
        <span className="text-orange-500 font-bold mr-1">
          {rating.rate.toFixed(1)}
        </span>
        <span className="text-gray-600">({rating.count} reviews)</span>
      </div>

      {/* Related Products Section */}
      <RelatedProducts productId={product.id} />

      {/* Customer Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-bold text-gray-800">
                    {review.username}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      {/* Product Feedback Form - Placed at the Bottom */}
      <ProductFeedback productId={product.id} setReviews={setReviews} />
    </div>
  );
};

export default ProductDetails;
