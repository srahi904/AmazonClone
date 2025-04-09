/** @format */

import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const AccountPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user?.username || "Guest");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center">
      {/* ✅ Profile Avatar & Name */}
      <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
          {username.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl font-semibold">{username}</h1>
      </div>

      {/* ✅ Account Details */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mt-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Profile Details</h2>
        <p className="text-gray-600 mt-1">
          Username:{" "}
          <span className="font-semibold text-gray-800">{username}</span>
        </p>

        {/* ✅ Order History Section */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Your Orders</h2>
          <p className="text-gray-600">View your past purchases and details.</p>
          <Link
            to="/order"
            className="text-blue-500 underline hover:text-blue-600 transition-all"
          >
            View Order History
          </Link>
        </div>

        {/* ✅ Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
