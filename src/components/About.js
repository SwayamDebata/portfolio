import React from "react";
import UFOBeamMenu from "./UFOBeamMenu";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center bg-center bg-repeat h-screen w-full mt-20 lg:mt-0"
    >
      <div className="text-center max-w-5xl p-10 font-orbitron">
        {/* Title */}
        <h1 className="text-xl font-orbitron text-green-400 mb-6">ABOUT ME</h1>
        {/* Content */}
        <p className="text-white text-md leading-10">
        Hey there! I'm Swayam, a passionate software engineer with a love for exploring the vast universe of technology and design. I thrive on building scalable, efficient solutions and enjoy collaborating with talented teams to turn ideas into reality.
        Currently, I’m contributing to groundbreaking innovations at CometChat, where I specialize in creating scalable, user-friendly interfaces and features that enhance communication experiences.

My journey in tech began with a curiosity for problem-solving and a love for design, which has evolved into a career where I get to build, optimize, and refine cutting-edge solutions.
When I’m not writing code, you’ll find me immersed in the cosmos—whether it's through the lens of photography, crafting a new piece of poetry, or diving into storytelling. My aim is to create engaging, intuitive digital experiences that not only solve problems but also spark joy.
        </p>
      </div>
    </div>
  );
};

export default About;
