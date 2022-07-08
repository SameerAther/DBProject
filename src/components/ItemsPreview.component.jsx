import React from 'react';

import '../App.css';
import { Items } from '../components/Items.component.jsx';

export const ItemsPreview = (props) => {
    const pathname = window.location.pathname;
    const route = pathname.substring(pathname.lastIndexOf('/') + 1);
    const [product] = props.menuItems.filter(menuItem => menuItem.routeName === route);

    return (
        <div className="items-preview">
            <h1 className="items-preview-heading">{product.title}</h1>
            <div className="items">
                {
                    product.items.map((item)=> {
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
