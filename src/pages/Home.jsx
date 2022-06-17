import React from 'react';

import '../App.css'
import backgroundVideo from '../assets/video.mp4';
import { Button } from '../components/Button.component';
import { Header } from '../components/Header.component.jsx'

export const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="landing-section">
        <Header signedIn={props.user.signedIn} />

        <div className="landing-text">
          <h1>Its not about <span className="highlight f1">Fashion</span><br></br>Its about <span className="highlight">Personality</span></h1>

          <Button
            class="btn-main"
            text="start shopping" />
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
