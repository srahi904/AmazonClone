/** @format */

import React from "react";
import Carousel from "./Carousel";
import ProductGrid from "./ProductGrid";
// import CategoryList from "./CategoryList";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Carousel />
      {/* <CategoryList /> */}
      <ProductGrid isHomePage={true} />
    </div>
  );
};

export default HomePage;
