import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState()

  function addToCart() {
    setCart((buttonText) => !buttonText)
  }

  const classNames = cart ? "in-cart" : ""
  const buttonText = cart ?  "Remove From Cart" : "Add to Cart"

  return (
    <li className={classNames}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
