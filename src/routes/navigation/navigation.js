import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import babylogo from '../../assets/baby.jpeg';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <img src={babylogo} alt="Logo" className='logo' />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
        <Link className='nav-link' to='/authenticate'>
          Sign In
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
