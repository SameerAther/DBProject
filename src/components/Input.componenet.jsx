import React from 'react';

import '../App.css';

export const Input = (props) => {
    return (
        <input className = {`input ${props.class ?`${props.class}`:''}`}
        type={props.type} 
        placeholder={props.placeholder}
        value={props.value}
        onChange = {props.onChange}/>
    )
}
