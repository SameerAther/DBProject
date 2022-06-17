import React , { Component } from 'react';
import {Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/SignUp.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Homepage } from './pages/Home.jsx';
import './App.css';

const initialState = {
  user: {
    id: '',
    signedIn: false,
    name: '',
    email: '',
    joined: '',
    cart: '',
  }
}

// const pathname = window.location.pathname

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

 
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState)
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  } 

  render(){
    return (
      <div className="App">
        <Homepage user={this.state.user}/>
        {/* <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>} />
        </Routes> */}
      </div>
    );
  }
}
export default App;
