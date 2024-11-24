import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../styles/components/ProductDetail.css';

function ProductDetail() {
  const { sku } = useParams(); // Obtén el SKU del producto desde la URL.
  const [product, setProduct] = useState(null);

  // Simulación de carga de producto desde una API o base de datos.
  useEffect(() => {
    // Este código es solo un ejemplo. En una aplicación real, deberías hacer una llamada a una API.
    const fetchProduct = () => {
      // Aquí, deberías reemplazar esto con una llamada real a la API para obtener el producto por su SKU.
      const fetchedProduct = {
        name: 'Sillón Spear',
        category: 'Muebles',
        price: 32999,
        description: 'Brazo de rodillo estrecho. Las patas desmontables tienen un acabado de roble envejecido...',
        image: 'https://img.freepik.com/free-photo/round-chandeliers-hanging-from-ceiling_250224-330.jpg?t=st=1732465292~exp=1732468892~hmac=9ff6ba9eee11ff2713db5847ec50e611f858af5c827003a75ff6da40e76a6fb7&w=1800',
        sku: sku,
      };
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [sku]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="category">{`Categoría: ${product.category}`}</p>
          <p className="price">{`Precio: $${product.price}`}</p>
          <p className="description">{product.description}</p>
          <button className="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
