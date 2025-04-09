/** @format */

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review Submitted for Product ID: ${productId}`);
    navigate(-1); // Go back to the product page
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Write a Review</h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-medium mb-2">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} Stars
            </option>
          ))}
        </select>

        <label className="block text-gray-700 font-medium mb-2">
          Your Review
        </label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Write your thoughts..."
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
