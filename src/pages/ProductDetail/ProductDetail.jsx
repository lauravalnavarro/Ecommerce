import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

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
        image: 'https://images.prismic.io/wizeline-academy/0d340f60-059a-43d7-8311-490815d3a8e8_1.webp?auto=compress,format',
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
