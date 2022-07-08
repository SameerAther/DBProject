import React from 'react';

import '../App.css';
import { Button } from './Button.component';

export const CartDropdown = (props) => {
    return (
        <div className='cart' onMouseLeave={() => document.querySelector('.cart').classList.remove('show')}>
            <div className="cart-items">
                    {
                        props.user.cart.length === 0 ? <p>Cart is empty.</p> :
                        props.user.cart.map((item) =>{
                            return(
                                <div key={Math.floor(Math.random() * 1000000)}
                                 className="cart-item-detail">
                                    <img src={item.imageUrl} alt="img" />
                                    <div className="cart-item-desc">
                                        <span className="name">{item.name}</span>
                                        <span className="price">{item.quantity} X ${item.price}</span>
                                    </div>
                                </div> 
                            )
                        })
                    }
            </div>
            <Button 
                class="checkout-btn"
                text="GO TO CHECKOUT"
            />
        </div>
    );
}
