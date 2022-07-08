import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

import '../App.css';

const toggleCartDropdown = () => {
    const cart = document.querySelector('.cart');
    cart.classList.toggle('show');
}

export const CartIcon = (props) => {
    let count = props.user.cart.length === 0 ? 0 : props.user.cart.reduce((accum, item) => accum += item.quantity, 0);
    return (
        <>
            <div className="cart-icon-container">
                <BsCart4 
                className = "cart-icon"
                onClick={toggleCartDropdown}
                /> 
                <div className="cart-items-count">{count}</div>
            </div>
            <CgProfile 
            title = "my profile"
            className = "show-profile"/>
        </>
    );
}

