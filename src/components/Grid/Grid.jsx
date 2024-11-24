import Card from '../Card/Card';

import './Grid.css';

const Grid = ({products}) => {
    return ( 
        <div className='grid-container'>
           {
                products.map((product) => {
                    return <div className='node' key={product.id}>
                        <Card                               
                        imgUrl = {product.data.mainimage.url}
                        alt={product.data.mainimage.alt}
                        text={product.data}
                        />                   
                    </div>
                    
                })               
               
            }
        </div>
     );
}
 
export default Grid;