import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../assets/logo.svg';
import { Button } from './Button.component.jsx';
import { CartIcon } from './Cart-Icon.component.jsx';
import { CartDropdown } from './Cart-Dropdown.component.jsx';

export const Header = (props) => {
  const [string, setString] = useState('header header-home');

  return (
    <> 
      <header className={`${string}`}>

        <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
        </div>

        <nav className='navigation'>
          <ul className="nav-links">
            <li>
              <Link to="/" className="link"
              onClick={() => {setString("header header-home")}}>Home</Link>
            </li>
            <li>
              <Link to="/products" className="link"
              onClick={() => {setString("header sticky")}}>Products</Link>
            </li>
            <li>
              <a href="/about" className="link" 
              onClick={() => {setString("header sticky")}}>About</a>
            </li>
          </ul>
          {
            props.user.signedIn ? <CartIcon user={props.user}/> : <Link to="/signin">
              <Button
                class="btn-header"
                text="SIGN IN"/>
            </Link>
          }
        </nav>
      </header>
      {
        props.user.signedIn ? <CartDropdown user={props.user} deleteFromCart={props.deleteFromCart}/> : <></>
      }
    </>
  )
};

