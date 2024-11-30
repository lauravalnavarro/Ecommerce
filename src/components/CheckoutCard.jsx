import React, { useState } from "react";
import accounting from "accounting";
import "../styles/components/CheckoutCard.css";

const CheckoutCard = ({ product }) => {
  const { name, href } = product;

  console.log(product, name);

  const [quantity, setQuantity] = useState(1);

  const removeItem = () => {
    console.log("remove");
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="checkout-card">
      <div
        className="checkout-card-media"
        style={{ backgroundImage: `url(${href})` }}
        title={name}
      ></div>
      <div className="checkout-card-body">
        <h3 className="checkout-card-title">{product.data.name}</h3>
        <p className="checkout-card-price">{accounting.formatMoney(product.data.price, "€")}</p>
        <p className="checkout-card-stock">In Stock</p>
      </div>
      <div className="checkout-card-actions">
        <div className="checkout-card-counter">
          <button
            onClick={decreaseQuantity}
            className="checkout-card-counter-btn"
          >
            -
          </button>
          <span className="checkout-card-quantity">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="checkout-card-counter-btn"
          >
            +
          </button>
        </div>
        <button
          onClick={removeItem}
          className="checkout-card-delete-btn"
          aria-label="Remove item"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;

