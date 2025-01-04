import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "../assets/particles-config";

const ParticlesBackground = () => {
  const initializeParticles = async (engine) => {
    // Load tsparticles full engine
    await loadFull(engine);
  };

  return (
    <Particles 
      options={particlesConfig} 
      init={initializeParticles}
    />
  );
};

export default ParticlesBackground;
