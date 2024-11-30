import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/components/Total.css";

const Total = () => {
  // Mock basket if no cart is available.
  const basket = [
    { id: 1, name: "Boho Lamp", price: 32900 },
    { id: 2, name: "Modern Lamp", price: 39900 },
  ];

  // Calculate total price.
  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <h3 className="total-title">Receipt</h3>
      <div className="total-items">
        {basket.map((item) => (
          <div key={item.id} className="total-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{`€${item.price.toFixed(2)}`}</span>
          </div>
        ))}
      </div>
      <div className="total-summary">
        <span className="total-label">Total:</span>
        <span className="total-price">{`€${totalPrice.toFixed(2)}`}</span>
      </div>
      <Button
        component={Link}
        to="/checkout"
        className="total-checkout-button"
        variant="contained"
        color="secondary"
      >
        Pay
      </Button>
    </>
  );
};

export default Total;

