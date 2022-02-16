import { useState } from "react";

export const Home =({products, addToCart}) =>{

    const [selectedProductId, setSelectedProductId] = useState(null);


    const toggleDetailsId = (id) => {
        setSelectedProductId((oldId) => (oldId === id ? null : id));
      };

return (

<div>
  {products.map((product) => {
    const { id } = product;
    const isExpanded = selectedProductId === product.id;
    return (
      <div className="Products" key={product.id}>
        <div>
          {<img className="img" src={product.image}></img>}
          {product.title}
          <button onClick={() => toggleDetailsId(id)}>
            {!isExpanded ? "Show details" : "Hide details"}
          </button>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        {isExpanded && (
          <dialog open>
            {product.description}
            {product.price}
            {product.category}
          </dialog>
        )}
      </div>
    );
  })}
</div>)};
