import React from 'react';

import '../App.css';
import { Button } from './Button.component';

export const CartDropdown = (props) => {
    return (
        <div className='cart'>
            <div className="cart-items">
                <Button 
                class="checkout-btn"
                text="GO TO CHECKOUT"
                />
            </div>
        </div>
    );
}
