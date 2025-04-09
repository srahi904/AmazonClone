/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-4 mr-4">
      <Link to="/account" className="hover:text-yellow-500 transition-colors">
        Account
      </Link>
      <Link to="/orders" className="hover:text-yellow-500 transition-colors">
        Orders
      </Link>
      <Link to="/prime" className="hover:text-yellow-500 transition-colors">
        Prime
      </Link>
    </nav>
  );
};

export default Navigation;
