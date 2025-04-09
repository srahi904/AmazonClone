/** @format */

import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded shadow p-4">
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="h-40 w-full object-cover mb-2"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-2 truncate">
                {item.description}
              </p>
              <p className="font-bold text-yellow-600">${item.price}</p>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
                <Link
                  to={`/product/${item.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
