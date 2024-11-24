import React, { useState } from 'react';

import Content from './Content';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import '../../styles/pages/HomePage.css';

const HomePage = (props) => {

    const[allProducts, setAllProducts]= useState(false);

    const handlerAllProducts = () =>{
        setAllProducts(!allProducts);        
    };

    return ( 
        <div className='home-page'>
            <Header
                handlerAllProducts={()=>handlerAllProducts}
            />
            <Content
                allProducts={allProducts}
                handlerAllProducts={()=>handlerAllProducts}
            {...props}
            />
            <Footer/>
        </div>
        

     );
}
 
export default HomePage;