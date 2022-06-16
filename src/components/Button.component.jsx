import React from 'react';

import '../App.css';

export const Button = (props) => {
    console.log(props.color);
    return (
        <button className="btn" style={{backgorund: props.color}}
        type = {props.type}>
            {props.text}
        </button>
    )
}
