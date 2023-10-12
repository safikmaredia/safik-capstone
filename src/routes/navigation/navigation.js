import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import babylogo from '../../assets/baby.jpeg';
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


import './navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);



  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={babylogo} alt='Baby Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/authenticate'>
            SHOP
          </Link>

          {currentUser ? (
            <Link className='nav-link' to='/' onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/authenticate'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>

  );
};

export default Navigation;





     