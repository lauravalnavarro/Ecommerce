import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import accounting from "accounting";
import "../styles/components/CheckoutCard.css";

const CheckoutCard = ({ product }) => {
  const { name, price, rating, href } = product;

  const removeItem = () => {
    console.log("remove");
  };

  return (
    <Card className="checkout-card">
      <CardMedia className="checkout-card-media" image={href} title={name} />
      <div className="checkout-card-body">
        <Typography className="checkout-card-title">{name}</Typography>
        <Typography className="checkout-card-price">
          {accounting.formatMoney(price, "€")}
        </Typography>
        <Typography className="checkout-card-stock">In Stock</Typography>
      </div>
      <CardActions disableSpacing className="checkout-card-actions">
        <div className="checkout-card-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <IconButton onClick={removeItem} className="checkout-card-delete-btn">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CheckoutCard;
