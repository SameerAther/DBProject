import React from 'react';

import '../App.css';

export const Input = (props) => {
    return (
        <input className = "input"
        type={props.type} 
        placeholder={props.placeholder}
        value={props.value}/>
    )
}
