import React from "react";
import { Products } from "../components/products";
import { Product } from "../components/product";

export const Shop = () => {
  return (
    <>
      <div className="container">
        <h3>Tech Shop</h3>
      </div>
      <div className="container row row-cols-1 row-cols-md-2 g-4">
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </>
  );
};
