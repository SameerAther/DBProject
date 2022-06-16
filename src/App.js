import React , { Component } from 'react';
import {Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/SignUp.jsx';
import { SignIn } from './pages/SignIn.jsx';
import { Homepage } from './pages/Home.jsx';
import { Header } from './components/Header.component.jsx';
import './App.css';

const initialState = {
  route: 'sign',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

// const pathname = window.location.pathname

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
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
        <Header/>
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
