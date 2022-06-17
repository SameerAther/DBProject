import React from 'react';
import '../App.css'

import {Link} from 'react-router-dom'

import { ParticlesContainer } from '../components/Particles.component.jsx';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitChange = () => {
    fetch('https://safe-spire-60768.herokuapp.com/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json()).then(data => {
      if(data.id){
        this.props.loadUser(data);
        this.props.onRouteChange('home');
      }
    })
  }

  render(){
    return(
        <div>
          <ParticlesContainer/>
          <article className="br3 ba b--near-white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa5 black-80 main-space br3">
              <div className="measure">
                  <fieldset id="sign_up" className="b--transparent ph0 mh0">
                  <legend className="f2 fw6 ph0 mh0">Sign in to Bazaar</legend>
                  <div className="mt3">
                      <label className="db fw6 lh-copy f6 label" htmlFor="email-address">Email</label>
                      <input 
                      className=" br3 pa2 input-reset ba hover-bg-black hover-white w-100 inputs" type="email" 
                      name="email-address"  id="email-address" onChange={this.onEmailChange}/>
                  </div>
                  <div className="mv3">
                      <label className="db fw6 lh-copy f6 label" htmlFor="password">Password</label>
                      <input className="br3 pa2 input-reset ba hover-bg-black hover-white w-100 inputs" type="password" 
                      name="password"  id="password" onChange={this.onPasswordChange}/>
                  </div>
                  </fieldset>
                  <div className="">
                  <input className="br3 b ph4 pv2 input-reset ba b--black inputs grow pointer f5 dib" type="submit" value="Signin" onClick={this.onSubmitChange}/>
                  </div>
                  <div className="lh-copy mt5 created" style={{paddingTop: '1em'}}>
                    <p>New to Bazaar? <Link to='/signup' className='f5 dim blue'>Create Account</Link></p>
                  </div>
              </div>
            </main>
          </article>
        </div>
    )
  }
}
