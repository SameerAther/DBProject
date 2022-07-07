import React from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';

import '../App.css';
import { Header } from '../components/Header.component.jsx';
import { MenuDirectory } from '../components/MenuDirectory.component.jsx';
import { ItemsPreview } from '../components/ItemsPreview.component.jsx';

let route = 'hats';
const handleClick = (e) => {
    route = e.target.closest('.menu-item').id;
    <Link to={`/products/${route}`} replace/>
    console.log(route);
}

export const Products = (props) => {
    return(
        <div className="products-page">
            {/* <Header signedIn={this.props.user.signedIn}/> */}
            <Routes>
                <Route exact path='/' element = {<MenuDirectory 
                shopCategory = {props.menuItems} 
                handleClick={handleClick}/>} />
                <Route path='/products/:route' element = {<></>}/>
            </Routes>
            <ItemsPreview 
                route={route}
                menuItems={props.menuItems}/>
        </div>
    )
}
