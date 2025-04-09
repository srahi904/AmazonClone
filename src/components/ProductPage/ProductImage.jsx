/** @format */

import React from "react";

const ProductImage = ({ image, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
};

export default ProductImage;
