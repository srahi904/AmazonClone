/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="mr-4">
      <img
        src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
        alt="Amazon Logo"
        className="h-8 w-auto cursor-pointer "
      />
    </Link>
  );
};

export default Logo;
