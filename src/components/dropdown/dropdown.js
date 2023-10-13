import React from 'react';

import Button from '../button-component/button-component';

import './dropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;