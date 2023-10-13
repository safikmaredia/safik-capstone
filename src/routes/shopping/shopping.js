import React, { useContext } from 'react';  

import ProductCard from '../../components/item-card/item-card';

import { ProductsContext } from '../../contexts/products.context';

import './shopping.scss';

const Shopping = () => {  
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shopping;  
