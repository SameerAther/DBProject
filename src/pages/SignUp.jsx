import React from 'react';
import '../App.css';

import {Link, Navigate} from 'react-router-dom'

import { ParticlesContainer } from '../components/Particles.component.jsx';
import { Input } from '../components/Input.componenet.jsx';
import { Button } from '../components/Button.component.jsx';

export class SignUp extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: '',
          email: '',
          password: ''
      }
  }

  onNameChange = (event) => {
      this.setState({name: event.target.value.toLowerCase()})
  }

  onEmailChange = (event) => {
      this.setState({email: event.target.value});
  }
  
  onPasswordChange = (event) => {
      this.setState({password: event.target.value});
  }

  submit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.name, this.state.email, this.state.password);
      
      this.setState({name: '', email: '', password: ''});
  }

render(){
    return(
      <div>
        {/* <ParticlesContainer/> */}
        <div className="form-container">
            <form className="form">
              <h1>SIGN UP</h1>
              <div className="input-container">
                <label>Name</label>
                <Input 
                type="text" 
                placeholder="Enter your name"
                onChange={this.onNameChange}
                class="signup-input-name"/>
              </div>
              <div className="input-container">
                <label>Email</label>
                <Input 
                type="text" 
                placeholder="Enter your email"
                onChange={this.onEmailChange}
                class="signup-input-email"/>
              </div>
              <div className="input-container">
                <label>Password</label>
                <Input 
                type="password" 
                placeholder="Enter your password"
                onChange={this.onPasswordChange}
                class="signup-input-password"/>
                <div className="pass-msg"><p>{this.state.password.length < 6 ? "*password must be greater than 6 characters" : ""}</p></div>
              </div>
              <Button
              class="btn-block" 
              type="submit"
              text={`sign up`.toUpperCase()}
              onSubmit={this.submit}/>
            </form>
            <p>Already have an account <Link to="/signin">{"sign_in".toUpperCase()}</Link> now</p>
            {
              this.props.user.signedIn && <Navigate to="/" replace/>
            }
          </div>
      </div>
    )
  }
}
