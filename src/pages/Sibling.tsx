import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { MoveDirection } from "tsparticles-engine";
import getCurrentHost from '../services/SiblingService';
import Particles from "react-particles";

export default function SiblingPage() {
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
    <div>
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
)
}