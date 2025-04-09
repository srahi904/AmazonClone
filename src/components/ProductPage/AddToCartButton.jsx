/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext"; // 👈 NEW
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AddToCartButton = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { user } = useAuth(); // 👈 Check if user is logged in

  const handleAddToCart = () => {
    try {
      addToCart(product);
      toast.success("🛒 Product added to cart!");
    } catch (error) {
      toast.error("❌ Failed to add to cart!");
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      toast.info("🔐 Please login to continue with checkout.");
      navigate("/login");
      return;
    }

    try {
      addToCart(product);
      toast.success("⚡ Redirecting to checkout...");
      setTimeout(() => {
        navigate("/checkout");
      }, 1000);
    } catch (error) {
      toast.error("❌ Buy now failed!");
    }
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast.info("🔐 Login to add to wishlist.");
      navigate("/login");
      return;
    }

    try {
      addToWishlist(product);
      toast.success("💖 Added to wishlist!");
    } catch (error) {
      toast.error("❌ Failed to add to wishlist!");
    }
  };

  return (
    <div className="flex space-x-4 mt-6">
      <button
        onClick={handleAddToWishlist}
        className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow"
      >
        <FontAwesomeIcon icon={faHeart} />
        Wishlist
      </button>

      <button
        onClick={handleAddToCart}
        className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow"
      >
        🛒 Add to Cart
      </button>

      <button
        onClick={handleBuyNow}
        className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow"
      >
        ⚡ Buy Now
      </button>
    </div>
  );
};

export default AddToCartButton;
