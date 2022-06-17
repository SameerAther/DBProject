import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom'

import { ParticlesContainer } from '../components/Particles.component.jsx';

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
      this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
      this.setState({email: event.target.value});
  }
  
  onPasswordChange = (event) => {
      this.setState({password: event.target.value});
  }

  onSubmitChange = () => {
    fetch('https://safe-spire-60768.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json()).then(user => {
      if(user.id){
        console.log(user)
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

render(){
    return(
      <div>
        <ParticlesContainer/>
          <article className="br3 ba b--near-white mv4 w-90 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80 main-space br3">
              <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f2 fw6 ph0 mh0">Sign Up to Bazaar</legend>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                      <input className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white inputs" 
                      style={{width: '94%'}} type="name" name="name"  
                      id="name" onChange={this.onNameChange} required/>
                  </div>
                  <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 inputs" 
                      type="email" name="email-address"  
                      id="email-address" onChange={this.onEmailChange} required/>
                  </div>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                      <input className="br3 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 inputs" 
                      type="password" name="password"  
                      id="password" onChange={this.onPasswordChange} required/>
                  </div>
                  </fieldset>
                  <div className="">
                  <input className="br3 b ph4 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib inputs" type="submit" 
                  value="Register" onClick={this.onSubmitChange}/>
                  </div>
                  <div className="lh-copy mt3 created" style={{paddingTop: '1em'}}>
                    <p>Already have an account? <Link to='/signin' className='f5 dim blue'>Sign In</Link></p>
                  </div>
              </div>
              </main>
          </article>
      </div>
    )
  }
}
