import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center bg-center bg-repeat min-h-screen w-full mt-10 lg:mt-0 px-2 sm:px-4"
    >
      <div className="text-center max-w-2xl sm:max-w-4xl p-4 sm:p-10 font-orbitron">
        <h1 className="text-xl font-orbitron text-green-400 mb-6">ABOUT ME</h1>
        <p className="text-white text-md leading-10">
          <span className="text-green-400">Cosmic Coder. AI Explorer. Full-Stack Voyager.</span><br/><br/>
          Welcome to my universe! I'm Swayam, a full-stack developer with 2+ years of experience navigating the galaxies of web and mobile technology. My starship is powered by React, React Native, Next.js, Node.js, and TypeScript, and my latest missions have taken me deep into the realms of AI—integrating LLMs, agentic workflows, and conversational intelligence into real-time apps.<br/><br/>
          Currently, I’m charting new frontiers at <b className="text-green-400">CometChat</b>, where I build scalable, user-friendly chat interfaces and AI-powered automation features. My journey is fueled by curiosity, creativity, and a drive to make digital experiences as seamless and joyful as a warp-speed ride through the cosmos.<br/><br/>
          Whether I’m engineering scalable architectures, crafting pixel-perfect UIs, or collaborating with stellar teams, I thrive on turning ideas into reality and pushing the boundaries of what’s possible. When I’m not coding, you’ll find me exploring the universe through photography, poetry, and storytelling.<br/><br/>
          <span className="text-green-400">Let’s connect and create something out of this world!</span>
        </p>
      </div>
    </div>
  );
};

export default About;
