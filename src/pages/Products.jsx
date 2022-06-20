import React from 'react';

import '../App.css';
import { Header } from '../components/Header.component.jsx';
import { MenuDirectory } from '../components/MenuDirectory.component.jsx'

export class Products extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            menuItems : []
        }
    }

    fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/menuItems');
        const data = await res.json();

        return data;
    }

    componentDidMount(){
        const setInitialState = async () => {
            const res = await fetch('http://localhost:5000/menuItems');
            const menuItems = await res.json();
    
            this.setState({"menuItems": menuItems});
        }
        setInitialState();
    }
    
    render(){
        return(
            <div className="products-page">
                <Header signedIn={this.props.user.signedIn}/>
                <MenuDirectory menuItems = {this.state.menuItems}/>
            </div>
        )
    }
}
