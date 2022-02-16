import { useState } from "react";
import "./Home.css";

export const Home =({products, addToCart}) =>{

    const [selectedProductId, setSelectedProductId] = useState(null);


    const toggleDetailsId = (id) => {
        setSelectedProductId((oldId) => (oldId === id ? null : id));
      };

return (

<div className="container">
  {products.map((product) => {
    const { id } = product;
    const isExpanded = selectedProductId === product.id;
    return (
      <div className="productContainer" key={product.id}>
        <div className="product">
          {<img className="img" src={product.image}></img>}<br></br>
          {product.title}
          <button onClick={() => toggleDetailsId(id)}>
            {!isExpanded ? "Show details" : "Hide details"}
          </button>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        {isExpanded && (
          <div>
            {product.description}<br></br>
            <hr></hr>
            Price: {product.price} USD<br></br>
          </div>
        )}
      </div>
    );
  })}
</div>)};
