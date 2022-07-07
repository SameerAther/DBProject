import React from 'react';

import '../App.css';
import { Items } from '../components/Items.component.jsx';

export const ItemsPreview = (props) => {
    console.log(window.location.pathname);
    const [product] = props.menuItems.filter(menuItem => menuItem.routeName === props.route);
    console.log(product);
    return (
        <div className="items-preview">
            <h1 className="items-preview-heading">{product.title}</h1>
            <div className="items">
                {
                    product.items.map((item)=> {
                        return(
                            <Items
                            key={item.id} 
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}
