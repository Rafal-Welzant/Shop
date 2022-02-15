import React, { useState, useEffect } from "react";
import { CartItems } from "./CartItems";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import css from './style.module.css'
import { Summary } from "./Summary";




function App() {

  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const API = "https://fakestoreapi.com/products";
    fetch(API)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleDetailsId = (id) => {
    setSelectedProductId((oldId) => (oldId === id ? null : id));
  };

  const addToCart = (product) => {
    setCart((cartProducts) => [...cartProducts, product]);
  };

  const removeFromCart = (productIndex) => {
      setCart((products) => {
        const updateProducts = [...products];
        updateProducts.splice(productIndex, 1);
        return updateProducts; 
      })
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <BrowserRouter>
      <div className={css.page}>
        <div className={css.nav}>
          <div>
          <h1>myShop</h1>
          </div>
          <div>
          <NavLink to='/cart'>
            <img
              src="https://github.githubassets.com/images/icons/emoji/unicode/1f6d2.png"
              alt="cart"
            ></img>
            <p>liczba produktów w koszyku: {cart.length}</p>
          </NavLink>
          <NavLink to='/summary'>
            <button>Summary</button>
          </NavLink>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className={css.content}>
              <ul className={css.productsList}>
                {products.map((product) => {
                  const { id, name } = product;
                  const isExpanded = selectedProductId === product.id;
                  return (
                    <li className={css.item} key={product.id}>
                      <div>
                        {product.name}
                        <button onClick={() => toggleDetailsId(id)}>
                          {!isExpanded ? "Show details" : "Hide details"}
                        </button>
                        <button onClick={() => addToCart(product)}>
                          Add to cart
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="itemDetails">
                          {product.title} 
                          {product.price}
                          {product.category}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              </div>
            }
          ></Route>
          <Route path="/cart" element={<CartItems products={cart} addProduct={addToCart} removeProduct={removeFromCart} />}></Route>
          <Route path="/summary" element={<Summary products={cart} onClear={clearCart} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;