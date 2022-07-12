import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export const MenuItem = (props) => {
    return (
        <Link to={`/products/${props.route}`}
        className={`menu-item ${props.size ? props.size : ""}`}>
            <div 
            className="menu-item-image"
            style={{backgroundImage: `url(${props.imgUrl})`}}>
                <div className="menu-item-content">
                    <h1 className="menu-item-titile">
                        {props.title}
                    </h1>
                    <span className="menu-item-subtitle">
                        {"shop now".toUpperCase()}
                    </span>
                </div>
            </div>
        </Link>
    )
}
