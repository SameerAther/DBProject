import React from 'react';

import '../App.css';
import { Items } from '../components/Items.component.jsx';

export const ItemsPreview = (props) => {
    const pathname = window.location.pathname;
    const route = pathname.substring(pathname.lastIndexOf('/') + 1);
    let product;
    if(route==='hats'){
        product = props.menuItems.slice(0, 9);
    }
    else if(route === 'sneakers'){
        product = props.menuItems.slice(10, 17)
    }
    else if(route === 'jackets'){
        product = props.menuItems.slice(18, 22)
    }
    else if(route === 'womens'){
        product = props.menuItems.slice(23, 29)
    }
    else if(route === 'mens'){
        product = props.menuItems.slice(30, 35)
    }

    return (
        <div className="items-preview">
            <h1 className="items-preview-heading">{route.toUpperCase()}</h1>
            <div className="items">
                {
                    product.map((item) => {
                        return(
                            <Items
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            addToCart={props.addToCart}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
