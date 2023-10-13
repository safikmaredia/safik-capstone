
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import babylogo from '../../assets/baby.jpeg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { CartContext } from '../../contexts/icon.context';
import CartIcon from '../../components/icon/icon';
import Dropdown from '../../components/dropdown/dropdown';

import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={babylogo} alt='Baby Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shopping'>
            Shop
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/authenticate'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <Dropdown />}

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
