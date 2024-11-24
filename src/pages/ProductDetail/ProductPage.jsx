import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import '../../styles/pages/HomePage.css';
import ProductDetail from './ProductDetail';

const ProductPage = (props) => {

    const[allProducts, setAllProducts]= useState(false);

    const handlerAllProducts = () =>{
        setAllProducts(!allProducts);        
    };

    return ( 
        <div className='home-page'>
            <Header
                handlerAllProducts={()=>handlerAllProducts}
            />
            <ProductDetail/>
            <Footer/>
        </div>
        

     );
}
 
export default ProductPage;