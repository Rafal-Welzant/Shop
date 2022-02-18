import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./CartItems.css";

export const CartItems = ({ products, addProduct, removeProduct }) => {


  return (
    <div className="container">
      <div className="content">
        <p>
          Total Price:
          {products
            .map((product) => product.price)
            .reduce((a, b) => a + b, 0)}
          {" $"}
        </p>
        {products.map((product, index) => {
          return (
            <div key={index}>
              {<img className="img" src={product.image}></img>}
              {product.price}$
              <hr></hr>
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
          {" $"}
        </p>
        <NavLink to="/summary">
          <button>Summary</button>
        </NavLink>
      </div>
    </div>
  );
};
