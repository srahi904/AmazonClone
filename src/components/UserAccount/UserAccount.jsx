/** @format */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserAccount = () => {
  const { user, login, signup, logout } = useAuth();
  const [isNewUser, setIsNewUser] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // 👈 NEW state
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNewUser) {
      const success = signup(credentials.username, credentials.password);
      if (success) {
        alert("Signup successful! Logging you in.");
        navigate(location.state?.from?.pathname || "/", { replace: true });
      } else {
        alert("Signup failed. Username may already exist.");
      }
    } else {
      const success = login(credentials.username, credentials.password);
      if (success) {
        alert("Login successful!");
        navigate(location.state?.from?.pathname || "/", { replace: true });
      } else {
        alert("Login failed. Switching to Signup mode.");
        setIsNewUser(true);
      }
    }
  };

  if (user) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Welcome back, {user.username}!
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 mt-10 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        {isNewUser ? "Sign Up" : "Log In"}
      </h2>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"} // 👈 dynamic type
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 👇 Show Password Toggle */}
      <div className="flex items-center mb-4">
        <input
          id="showPassword"
          type="checkbox"
          className="mr-2"
          checked={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
        />
        <label htmlFor="showPassword" className="text-sm text-gray-600">
          Show password
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isNewUser ? "Sign Up" : "Log In"}
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        {isNewUser ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsNewUser(!isNewUser)}
          className="text-blue-500 hover:underline font-medium"
        >
          {isNewUser ? "Log In" : "Sign Up"}
        </button>
      </p>
    </form>
  );
};

export default UserAccount;
