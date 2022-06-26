import React from 'react';
import {Link, Navigate} from 'react-router-dom';

import '../App.css';
import { MenuItem } from './MenuItem.component.jsx'

const handleClick = (e) => {
    const route = e.target.closest('.menu-item').id;
    <Link to={route} replace/>
}

export const MenuDirectory = (props) => {
    return(
        <div className="products">
            <h1 className="products-heading">{'Products'}</h1>
            <div className="directory-menu">
                {
                    props.menuItems.map((menuItem)=> {
                        return(
                            <MenuItem 
                            key={menuItem.id} 
                            title={menuItem.title}
                            imgUrl={menuItem.imageUrl}
                            size={menuItem.size}
                            route={menuItem.routeName}
                            handleClick={handleClick}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

"hellow "
