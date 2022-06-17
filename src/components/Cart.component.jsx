import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

import '../App.css';

export const Cart = (props) => {
    return (
        <div></div>
    );
}

export const CartIcon = (props) => {
    return (
        <>
            <div className="cart-icon-container">
                <BsCart4 
                className = "cart-icon"
                /> 
                <div className="cart-items-count">1</div>
            </div>
            <BsArrowRightShort 
            title = "logout"
            className = "btn-logout"/>
        </>
    );
}

