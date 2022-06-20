import React , { Component } from 'react';
import {Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/SignUp.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Homepage } from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import './App.css';

// const pathname = window.location.pathname

class App extends Component {
  constructor(){
    super();

    this.state = {
      "user": {},
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

    let user = {...userFound, signedIn: true};

    this.setState({user: user});

    await fetch(`http://localhost:5000/users/${user.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(user),
    });
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
      cart: []
    }

    this.setState({user: user});

    await fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(user),
    });
  }
  
  ////////////////////////

  // / FETCH FUNCTIONALITY
  fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();

    return data;
  }
  ////////////////////////

  //

  render(){
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage 
          user={this.state.user}/>}/>
          <Route path="/signin" element={<SignIn 
          onSubmit = {this.onSubmitSignIn} 
          user={this.state.user}/>}/>
          <Route path ="/signup" element={<SignUp 
          onSubmit = {this.onSubmitSignUp} 
          user={this.state.user}/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        {/* <Routes>
          <Route exact path='/' element={<Homepage user={this.state.user}/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>} />
        </Routes> */}
      </div>
    );
  }
}
export default App;
