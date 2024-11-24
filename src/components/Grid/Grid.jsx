import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';

import './Grid.css';

const Grid = ({products}) => {
    const navigate = useNavigate();

    const handleViewDetail = (productId) => {
        navigate(`/product-detail/${productId}`);
    };
    return ( 
        <div className='grid-container'>
           {
                products.map((product) => {
                    return <div className='node' key={product.id}>
                        <Card                               
                        imgUrl = {product.data.mainimage.url}
                        alt={product.data.mainimage.alt}
                        text={product.data}
                        handleViewDetail={ handleViewDetail}
                        {...product}
                        />                   
                    </div>
                    
                })               
               
            }
        </div>
     );
}
 
export default Grid;