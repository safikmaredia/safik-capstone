
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/icon.context';

import Button from '../button-component/button-component';
import CartItem from '../icon-item/icon-item';

import './dropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='custom-cart-dropdown'>
      <div className='custom-cart-header'>
        <h3>Your Cart</h3>
      </div>
      <div className='custom-cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className='empty-message'>Cart is empty</span>
        )}
      </div>
      <div className='custom-cart-footer'>
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
