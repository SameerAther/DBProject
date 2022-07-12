import React from 'react';
import { IoClose } from 'react-icons/io5';
import {Link} from 'react-router-dom';

import {Button} from '../components/Button.component'
import '../App.css';

export const CheckoutPage = (props) => {
  const handleClickCart = () => {
    props.onUpdateCart(props.user);
    console.log(props.user)
  }
  return(
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {props.user.cart?.map(cartItem => (
    <div className="checkoutitem cart-item-detail">
            <div className="imageContainer">
              <img src={cartItem.imageUrl} alt="item"/>
            </div>
            <div className="checkoutName">{cartItem.name}</div>
            <div className="checkout-quantity">
              <span className="quantity-value">{cartItem.quantity}</span>
            </div>
            <div className="checkoutName">${cartItem.price}</div>
            <div>
              <IoClose className="delete-from-cart-btn" title='delete item' onClick={props.deleteFromCart}/>
            </div>
      </div>))}
      <div className="checkout-total">Total: ${props.total}</div>
      <Link to='/payment'><Button class="checkout-btn" text="GO TO PAYMENT" onSubmit={handleClickCart}/></Link>
      {/* <StripeCheckoutButton price={props.total}/> */}
  </div>
)}