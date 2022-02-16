import React, { useState, useEffect } from "react";
import { CartItems } from "./CartItems";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Summary } from "./Summary";
import { Home } from "./Home";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const API = "https://fakestoreapi.com/products?limit=10";
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((cartProducts) => [...cartProducts, product]);
  };

  const removeFromCart = (productIndex) => {
    setCart((products) => {
      const updateProducts = [...products];
      updateProducts.splice(productIndex, 1);
      return updateProducts;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <div className="Container">
        <div className="Nav">
          <div className="ReactShopHeader">
            <h1>myShop</h1>
          </div>
          <div className="Navigation">
            <NavLink to="/cart">
              <img
                className="imgcart"
                src={process.env.PUBLIC_URL + "/cart.png"}
                alt="cart"
              ></img>
              <p>liczba produktów w koszyku: {cart.length}</p>
            </NavLink>
            <NavLink to="/summary">
              <button>Summary</button>
            </NavLink>
          </div>
        </div>
        <div className="Content">
          <Routes>
            <Route
              path="/"
              element={<Home products={products} addToCart={addToCart} />}
            ></Route>
            <Route
              path="/cart"
              element={
                <CartItems products={cart} addProduct={addToCart} removeProduct={removeFromCart}
                />
              }
            ></Route>
            <Route
              path="/summary"
              element={<Summary products={cart} onClear={clearCart} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
