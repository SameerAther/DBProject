import React from 'react';

import '../App.css';
import { MenuItem } from './MenuItem.component.jsx'

export const MenuDirectory = (props) => {
    return(
        <div className="directory-menu">
            {
                props.menuItems.map((menuItem)=> {
                    return(
                        <MenuItem 
                        key={menuItem.id} 
                        title={menuItem.title}
                        imgUrl={menuItem.imageUrl}
                        size={menuItem.size}/>
                    )
                })
            }
        </div>
    )
}