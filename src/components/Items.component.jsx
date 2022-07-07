import React from 'react';

import '../App.css';
import { Button } from '../components/Button.component.jsx';

export const Items = (props) => {
    return (
        <div className='item'>
            <div className="item-image"
            style={{backgroundImage: `url(${props.imageUrl})`}}
            ></div>
            <Button 
                class='add-to-cart-btn'
                type='submit'
                text={'add to cart'.toUpperCase()}
                onSubmit={()=> console.log('added to cart')}
                />
            <div className="item-footer">
                <span className="item-name">{props.name}</span>
                <span className="item-price">{`$${props.price}`}</span>
            </div>
        </div>
    );
}
