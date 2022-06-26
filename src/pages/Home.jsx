import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

import { Button } from '../components/Button.component';
import { Header } from '../components/Header.component.jsx';


export const Homepage = (props) => {
  
  return (
    <div className="homepage">
      <div className="landing-section">
        {/* <Header signedIn={props.user.signedIn} /> */}
        <div className="landing-text">
          <h1>Its not about <span className="highlight f1">Fashion</span><br></br> Its about <span className="highlight">Personality</span></h1>

          <Link to='/products' className="btn-main">Start Shopping</Link>
        </div>
          
        <div className="scroll-down">
          <div className="arrow_container">
            <a href="#toscroll">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
              <span className="text">Scroll down</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
