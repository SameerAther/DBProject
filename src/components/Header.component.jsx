import React from 'react';
import { Link } from 'react-router-dom';


import '../App.css';
import { Button } from './Button.component.jsx';

export const Header = (props) => {
  return (
    <header className="header">
      
      <div className='logo-container'>
        <img src='./logo512.png' alt='logo' className='logo' />
      </div>

      <nav className='navigation'>
        <ul className="nav-links">
          <li>
            <a href="/" className="link">Home</a>
          </li>
          <li>
            <a href="/" className="link">Products</a>
          </li>
          <li>
            <a href="/" className="link">About</a>
          </li>
        </ul>

        <Button 
        text="sign in"
        color="red"
        />
      </nav>

    </header>
  )
};

