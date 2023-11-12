import React, { useCallback, useEffect } from 'react';
import config from './config.json'
import './App.css';
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { MoveDirection } from "tsparticles-engine";


function getWeekNumber() {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate.getTime() - startDate.getTime()) /
      (24 * 60 * 60 * 1000));
  
  return Math.ceil(days / 7);
}

function getCurrentHost() {
  let weekNumber = getWeekNumber()
  // If week is uneven we use the week before (since it needs to be a fortnight length)
  if(weekNumber % 2 !== 0) {
    weekNumber--
  }

  const offset = weekNumber % config.siblings.length 
  return config.siblings[offset];
}

function App() {
  const host = getCurrentHost()
  const snowOptions = {
    background: {
      color: host.colors.background,
    },
    particles: {
        number: {
            value: 200,
        },
        move: {
            // direction: ""/,
            enable: true,
            random: false,
            straight: false,
        },
        opacity: {
            value: { min: 0.1, max: 0.5 },
        },
        color: {
          value: host.colors.confetti,
        },
        size: {
            value: { min: 1, max: 10 },
        },
        wobble: {
            distance: 20,
            enable: true,
            speed: {
                min: -5,
                max: 5,
            },
        },
    },
  };

  const options = snowOptions;

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSnowPreset(engine)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);

  

  return (
    <div className="App">
        <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        <div className="container">
          <div className="contentContainer">
          <h1>Sibling Dinner</h1>
          <span className="subtitle">Next hosts are:</span>

          <h2>
            {host.name}
          </h2>
          </div>
        </div>
    </div>
  );
}

export default App;
