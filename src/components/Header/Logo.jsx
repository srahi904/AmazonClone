/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="mr-4">
      <img
        src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
        alt="Amazon Logo"
        className="h-8 w-auto cursor-pointer "
      />
    </Link>
  );
};

export default Logo;
