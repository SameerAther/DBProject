import React , { Component } from 'react';
import {Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/SignUp.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Homepage } from './pages/Home.jsx';
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

  // SIGN IN 

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
    })
  }

  fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();

    return data;
  }

  //

  render(){
    return (
      <div className="App">
        {/* <Homepage user={this.state.user}/> */}
        <SignIn onSubmit = {this.onSubmitSignIn}/>
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
