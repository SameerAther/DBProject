import React from 'react';

import '../App.css';
import { MenuItem } from './MenuItem.component.jsx';

export const MenuDirectory = (props) => {
    return(
        <div className="products">
            <h1 className="products-heading">{'Products'}</h1>
            <div className="directory-menu">{ console.log(props)}
                {
                    props.shopcategory?.map((menuItem)=> {
                        return(
                            <MenuItem 
                            key={menuItem.id} 
                            title={menuItem.title}
                            imgUrl={menuItem.imageUrl}
                            size={menuItem.size}
                            route={menuItem.routeName}
                            menuItems = {props.menuItems} 
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


