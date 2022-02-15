import { NavLink } from "react-router-dom";
import { useState } from 'react'


export const Summary = ({ products, onClear }) => {
const [prankMessage, setPrankMessage] = useState(null);

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

  const groupedItems = groupBy(products, "name");
  const result = Object.entries(groupedItems).map(([key, items]) => (
    <li key={key}>
      {items[0].name} / {items.length}
    </li>
  ));

  const handleBuyNow = () => {
    onClear();
    setPrankMessage('Serio? Naprawdę liczyłeś, że pozwolimy Ci kupić nasze emoji? Weź je po prostu skopiuj.')
  }

  return (
    <>
      <ol>{result}</ol>
      {prankMessage && <p>{prankMessage}</p>}

      <NavLink to="/">
        <button>Back to Shop</button>
      </NavLink>
      <button onClick={handleBuyNow} disabled = {products.length === 0}>Buy Now</button>
    </>
  );
};
