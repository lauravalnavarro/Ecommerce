import Grid from "../Grid/Grid";

import '../../styles/components/ProductList.css'; 
import products from '../../mocks/es-mx/products.json';

const ProductList = () => {
  
    return (
      <div className="product-list-container">
        <div className="content">
          <Grid
            products={products.results}
          />
        </div>        
      </div>
        
      );
}
 
export default ProductList;