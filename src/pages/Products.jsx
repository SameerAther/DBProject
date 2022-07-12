import React from 'react';
// import {Routes, Route, Navigate, Link} from 'react-router-dom';

import '../App.css';
// import { Header } from '../components/Header.component.jsx';
import { MenuDirectory } from '../components/MenuDirectory.component.jsx';

export const Products = (props) => {
    return(
        <div className="products-page">
            {/* <Header signedIn={this.props.user.signedIn}/> */}
            <MenuDirectory 
            shopcategory = {props.shopcategory}
            menuItems = {props.menuItems} 
            handleClick={props.handleClick}
            />
        </div>
    )
}
