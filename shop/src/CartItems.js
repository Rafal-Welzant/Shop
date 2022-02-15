import { NavLink } from "react-router-dom";
import { useState } from "react";

export const CartItems = ({ products, addProduct, removeProduct }) => {


  return (
    <>
      <div>
        <p>
          Total Price:
          {products
            .map((product) => product.price)
            .reduce((a, b) => a + b, 0)}
          {" USD"}
        </p>
        {products.map((product, index) => {
          return (
            <div key={index}>
              {product.price}
              {/* {product.price.currency} */}
              {/* {product.title} */}
              <button onClick={() => addProduct(product)}>Add</button>
              <button onClick={() => removeProduct(index)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div>
        <NavLink to="/">
          <button>Back to Shop</button>
        </NavLink>
        <p>
          Total Price:
          {products
            .map((product) => product.price)
            .reduce((a, b) => a + b, 0)}
          {" USD"}
        </p>
      </div>
    </>
  );
};
