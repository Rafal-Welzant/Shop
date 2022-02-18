import React, { useState, useEffect } from "react";
import { CartItems } from "./CartItems";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Summary } from "./Summary";
import { Home } from "./Home";
import { getProducts } from './services/products';



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(setError);
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
      <div>
        <div className="navBar">
          <div>
          <NavLink to="/">
            <h1 className="shopName">myShop</h1>
            </NavLink>
          </div>
          <div className="navDetails">
            <NavLink to="/cart">
              <img
                style={{width: "75px", height:"75px"}}
                src={process.env.PUBLIC_URL + "/cart.png"}
                alt="cart"
              ></img>
              <p className="amount"> liczba produktów w koszyku: {cart.length}</p>
            </NavLink>
            {/* <NavLink to="/summary">
              <button className="button">Summary</button>
            </NavLink> */}
          </div>
        </div>
        <div>
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
