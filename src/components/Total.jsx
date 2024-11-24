import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/components/Total.css";

const Total = () => {
  // Mock de productos si no hay un carrito disponible.
  const basket = [
    { id: 1, name: "Producto A", price: 100 },
    { id: 2, name: "Producto B", price: 200 },
    { id: 3, name: "Producto C", price: 150 },
  ];

  // Calcular el precio total.
  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="total-container">
      <h3 className="total-title">Factura</h3>
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
        Pagar
      </Button>
    </div>
  );
};

export default Total;
