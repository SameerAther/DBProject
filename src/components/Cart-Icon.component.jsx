import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

import '../App.css';

export const CartIcon = (props) => {
    return (
        <>
            <div className="cart-icon-container">
                <BsCart4 
                className = "cart-icon"
                /> 
                <div className="cart-items-count">1</div>
            </div>
            <CgProfile 
            title = "my profile"
            className = "show-profile"/>
            <Cart/>
        </>
    );
}

