import { NavLink } from "react-router-dom";
import "./Summary.css";



export const Summary = ({ products, onClear }) => {


  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const groupedItems = groupBy(products, "title");
  const result = Object.entries(groupedItems).map(([key, items]) => (
    <ul key={key}>
      {<img className="img" src={items[0].image}></img>}
      {items[0].title} === 
      {items.length}
    </ul>
  ));

  const handleBuyNow = () => {
    onClear();
  }

  return (
    <div className="container">
      <div>{result}</div>
      <NavLink to="/">
        <button>Back to Shop</button>
      </NavLink>
      <button onClick={handleBuyNow} disabled = {products.length === 0}>Buy Now</button>
    </div>
  );
};
