import React from 'react';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import './particles.styles.css'

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
        background: {
          color: {
            value: 'linear-gradient(89deg, #f1b0c0 0%, #7edaff 100%)',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      };
    return <Particles className='particles' options={options} init={this.customInit} />;
  }
}