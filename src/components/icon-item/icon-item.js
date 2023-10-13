
import React from 'react';
import './icon-item.scss';

const IconItemAlt = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='icon-item-container'>
      <img src={imageUrl} alt={`${name}`} className='item-image' />
      <div className='item-details'>
        <span className='item-name'>{name}</span>
        <span className='item-price'>{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
};

export default IconItemAlt;
