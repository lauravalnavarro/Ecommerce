import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import CheckoutCard from "../../components/CheckoutCard";
import Total from "../../components/Total";
import '../../styles/pages/CheckoutPage.css';
import products from '../../mocks/es-mx/products.json';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const CheckoutPage = () => {
  const basket =[];
  console.log(products.results);

  function FormRow() {
    return (
      <>
        {products.results.map((item) => (
          <div key={item.id} className="checkout-card-container">
            <CheckoutCard product={{...item}} />
          </div>
        ))}
      </>
    );
  }

  const[allProducts, setAllProducts]= useState(false);

    const handlerAllProducts = () =>{
        setAllProducts(!allProducts);        
    };

  return (
    <>
    <Header
                handlerAllProducts={()=>handlerAllProducts}
            />
    <div className="checkout-page">
      <div className="checkout-title">
          Cart
      </div>
      <div className="checkout-container">
        <div className="checkout-card-container">
          <FormRow />
        </div>
        <div className="checkout-total-container"> 
            <Total />  
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CheckoutPage;
