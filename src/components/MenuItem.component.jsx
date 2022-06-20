import React from 'react';

import '../App.css';

export const MenuItem = (props) => {
    return (
        <div className={`menu-item ${props.size}`}>
            <div 
            className="background-image"
            style={{backgroundImage: `url(${props.imgUrl})`}}>
                <div className="item-content">
                    <h1 className="item-titile">
                        {props.title}
                    </h1>
                    <span className="item-subtitle">
                        {"shop now".toUpperCase()}
                    </span>
                </div>
            </div>
        </div>
    )
}
