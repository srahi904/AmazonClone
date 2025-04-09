/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const Header = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories from API
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const requireAuth = (path) => {
    if (!user) {
      alert("Please login to access this feature.");
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  // const navigateOrder = () => requireAuth("/order");

  const handleCartClick = () => requireAuth("/cart-summary");
  const handleAccountClick = () => requireAuth("/account");
  const handleWishlistClick = () => requireAuth("/wishlist");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Top Header */}
      <header className="bg-gray-900 text-white p-2">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* <Link to="/" className="text-2xl font-bold text-white">
            amazon
          </Link> */}

          {/* Search Bar */}
          <div className="flex-grow mx-4 max-w-2xl">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search products..."
                className="p-2 w-full rounded-l focus:outline-none text-gray-900 bg-white"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-400 hover:bg-yellow-500 px-4 rounded-r"
              >
                <FontAwesomeIcon icon={faSearch} className="text-gray-900" />
              </button>
            </div>
          </div>

          {/* Icons: Account | Wishlist | Cart */}
          <div className="flex items-center space-x-6">
            <button
              onClick={handleAccountClick}
              className="flex flex-col items-center text-sm"
            >
              <FontAwesomeIcon icon={faUser} className="text-xl" />
              <span>Account</span>
            </button>

            <button
              onClick={handleWishlistClick}
              className="flex flex-col items-center text-sm relative"
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {wishlist.length}
                </span>
              )}
              <span>Wishlist</span>
            </button>

            <button
              onClick={handleCartClick}
              className="flex flex-col items-center text-sm relative"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
              <span>Cart</span>
            </button>
          </div>
        </div>
      </header>

      {/* Categories Navigation */}
      <nav className="bg-gray-800 text-white p-2">
        <div className="container mx-auto flex space-x-6 overflow-x-auto">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="hover:text-yellow-400 capitalize"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
