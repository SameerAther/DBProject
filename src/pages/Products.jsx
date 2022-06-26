import React from 'react';
import {Routes, Route} from 'react-router-dom';

import '../App.css';
import { Header } from '../components/Header.component.jsx';
import { MenuDirectory } from '../components/MenuDirectory.component.jsx'

export const Products = (props) => {
    return(
        <div className="products-page">
            {/* <Header signedIn={this.props.user.signedIn}/> */}
            <MenuDirectory menuItems = {props.menuItems}/>
        </div>
    )
}
