import React , { Component } from 'react';
import {Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.component.jsx';
import { SignUp } from './pages/SignUp.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Homepage } from './pages/Home.jsx';
import { Products } from './pages/Products.jsx';
import { ItemsPreview } from './components/ItemsPreview.component.jsx';
import {CheckoutPage} from './pages/Checkout';
import { PaymentPage } from './pages/Payment.jsx';

import './App.css';

// const pathname = window.location.pathname

class App extends Component {
  #menuItems = {};
  #user = {};
  #shopcategory = {};

  constructor(){
    super();
    
    this.state = {
      "user": this.#user,
      "menuItems" : this.#menuItems,
      "shopcategory": this.#shopcategory,
      "total": 0
    }
  }
 
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  // onRouteChange = (route) => {
  //   if (route === 'signout'){
  //     this.setState(initialState)
  //   } else if (route === 'home'){
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route})
  // } 

  // / SIGN IN 
  onSubmitSignIn = async (emailC, passwordC) => {

    const emailInput = document.querySelector('.signin-input-text');
    const passwordInput = document.querySelector('.signin-input-password');

    emailInput.value = passwordInput.value = '';

    const users = await this.fetchUsers();
    const userFound = users.find((user) => emailC === user.email && passwordC === user.password);
    
    if(!userFound) {
      alert("user not found try again.");
      return;
    }
    let cart = JSON.parse(userFound.cart)
    let user = {...userFound,cart, signedIn: true};

    this.#user = user;
    this.setState({user: this.#user, menuItems: this.#menuItems});

    await fetch(`http://localhost:4000/userinformation/${user.id}`,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    console.log(user)
    const header = document.querySelector('.header');
    header === undefined ? console.log('bad') : header.style.transform = 'translateY(0%)';
  }
  /////////////////////////

  // / SIGN UP 
  onSubmitSignUp = async (name, email, password) => {

    const nameInput = document.querySelector('.signup-input-name');
    const emailInput = document.querySelector('.signup-input-email');
    const passwordInput = document.querySelector('.signup-input-password');

    emailInput.value = passwordInput.value = nameInput.value = '';

    const users = await this.fetchUsers();

    // close guards.
    if(!name || !email || !password) {
      alert('please fill in all fields');
      return;
    }
    if(password.length < 6) {
      alert('password must be at least 6 characters');
      return;
    }
    if(!email.includes('@')) {
      alert('please enter a valid email');
      return;
    }

    if(users.find((user) => user.email === email)) {
      alert('email already exists');
      return;
    }
    //*********************** */

    const id = Math.floor(Math.random() * 1000000);

    const user = {
      id: id,
      name: name,
      email: email,
      password: password,
      joined: new Date().toISOString(),
      signedIn: true,
      cart: [],
    }

    this.#user = user;

    this.setState({user: this.#user, menuItems: this.#menuItems});

    await fetch('http://localhost:5000/register',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(user),
    });

    const header = document.querySelector('.header');
    header === undefined ? console.log('bad') : header.style.transform = 'translateY(0%)';

  }
  
  onUpdateCart = async (obj) => {
    console.log(obj.cart)
    fetch('http://localhost:5000/updateCart', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        cart: obj.cart,
        id: obj.id
      })
    })
      .then(response => response.json())
  }

  ////////////////////////

  // / FETCH FUNCTIONALITY
  fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/userinformation');
    const data = await res.json();
    return data;
  }
  ////////////////////////

  // / FETCH PRODUCTS
  fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/menuitems');
    const data = await res.json();
    return data;
  }

  fetchShopCategory = async () => {
    const res = await fetch('http://localhost:5000/shopcategory');
    const data = await res.json();
    return data;
  }
///////////////////

// / ADD TO CART
  addToCart = async (obj) => {
    if(!this.state.user.signedIn){
      alert('please signin first!');

      return;
    }

    const itemExist = this.#user.cart.length===0 ? undefined : this.#user.cart.find((item) => item.id === obj.id);

    if(!itemExist){
      this.#user.cart.push({...obj, quantity : 1});
    }
    else{
      const index = this.#user.cart.findIndex((item) => item.id === obj.id);
      this.#user.cart[index].quantity++;
    }

    await fetch(`http://localhost:4000/userinformation/${this.#user.id}`,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    });

    this.setState({user: this.#user, menuItems: this.#menuItems});
    console.log(this.#user.cart)
    this.findTotal(this.#user.cart);
  }

///////////////////

  findTotal(item){
    let total = 0;
    let j;
    for(let i =0;i < item.length;i++){
      console.log(item[i].id)
      j = item[i].price * item[i].quantity;
      total = total + j;
    }
    this.setState({total: total});
    console.log(total);
  }

// / DELETE FROM CART 
  deleteFromCart = async (e) => {
    const id = +e.target.closest('.cart-item-detail').id;
    const itemIndex = this.#user.cart.findIndex((item) => item.id === id);

    this.#user.cart.splice(itemIndex, 1);

    await fetch(`http://localhost:5000/userinformation/${this.#user.id}`,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.#user),
    });
    console.log(this.#user)
    this.setState({user: this.#user, menuItems: this.#menuItems});
    this.findTotal(this.#user.cart)
  }

  ////////////////////

  // / LOGOUT 
  logOut = async () => {
    this.#user.signedIn = false;

    await fetch(`http://localhost:5000/userinformation/${this.#user.id}`,{
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json'
      },
    });
    this.#user = {};
    this.setState({user: this.#user, menuItems: this.#menuItems});
  }

componentDidMount(){
  const setInitialState = async () => {
      this.#menuItems = await this.fetchProducts();
      this.#shopcategory = await this.fetchShopCategory();
      this.setState({user: this.#user, menuItems: this.#menuItems, shopcategory: this.#shopcategory});
  }
  setInitialState();
}

//

  render(){
    return (
      <div className="App">
        <div className="sub">

          <Header style={{transform: 'translateY(0)'}} user={this.state.user} deleteFromCart={this.deleteFromCart}
          logOut={this.logOut}/>

          <Routes>

            <Route exact path="/" element={<Homepage 
            user={this.state.user}/>}/>

            <Route path="/signin" element={<SignIn 
            onSubmit = {this.onSubmitSignIn}
            user={this.state.user}/>}/>

            <Route path ="/signup" element={<SignUp 
            onSubmit = {this.onSubmitSignUp}
            user={this.state.user}/>}/>

            <Route path="/products" element={<Products menuItems = {this.state.menuItems} shopcategory={this.state.shopcategory}/>} />

            <Route path="/products/:route" element={<ItemsPreview
            menuItems={this.state.menuItems}
            shopcategory={this.state.shopcategory}
            addToCart={this.addToCart}/>}/>

            <Route path='/checkout' element={<CheckoutPage user={this.state.user} 
            deleteFromCart={this.deleteFromCart} total={this.state.total} onUpdateCart={this.onUpdateCart}/>}/>

            <Route path='/payment' element={<PaymentPage user={this.state.user} total={this.state.total}/>}/>
          </Routes>
        </div>

      </div>
    );
  }
}
export default App;
