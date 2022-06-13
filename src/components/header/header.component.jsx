import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.css';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <img src='./logo512.png' alt='logo' className='logo' />
    </div>
    <div className='options'>
      <Link className='option grow' to='/signin'>
        SignIn
      </Link>
      <Link className='option grow' to='/signup'>
        SignUp
      </Link>
    </div>
  </div>
);

export default Header;