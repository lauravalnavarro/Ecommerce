import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/components/ProductDetail.css';
import products from '../../mocks/es-mx/products.json';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProduct = () => {
      const found = products.results.find(el => el.id === id);      
      setProduct(found.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
      <div className="product-detail">
        <div className="product-image">
          <img src={product.images[0].image.url} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="category">{`Category: ${product.category.slug}`}</p>
          <p className="price">{`Price: $${product.price}`}</p>
          <p className="description">{product.description[0].text}</p>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
  );
}

export default ProductDetail;
