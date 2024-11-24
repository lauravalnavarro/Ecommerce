import React from 'react';
import './Card.css';

const Card = ({imgUrl, alt, text,id, handleViewDetail} ) => {
  console.log(id);
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={imgUrl} alt={alt} />
      </div>
      <div className='card-text'>
        <div className='name'>{text.name}</div>
        <div className='category'>{`Categoría: ${text.category.slug}`}</div>
        <div className='price'>{`Precio: $${text.price}`}</div>
      </div>
        <button className='view-detail-btn' onClick={()=>handleViewDetail(id)}>
          Ver detalle
        </button>
    </div>
  );
};

export default Card;
