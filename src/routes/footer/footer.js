import React from 'react';
import './footer.scss';
import Instagram from '../../assets/icon-instagram.png';
import Facebook from '../../assets/icon-facebook.png';
import Twitter from '../../assets/icon-twitter.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2>Follow Us</h2>
      <div className="social-icons">
          <img src={Instagram} alt='instagram' className='icon'/>
          <img src={Facebook} alt='facebook' className='icon'/>
          <img src={Twitter} alt="twitter" className="icon" />
      </div>
      <p>&copy; 2023 Baby Shop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

