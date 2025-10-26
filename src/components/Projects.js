import React from "react";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex items-center justify-center bg-center bg-repeat min-h-screen w-full mt-20 lg:mt-64 px-2 sm:px-4"
    >
      <div className="text-center max-w-2xl sm:max-w-4xl p-4 sm:p-10 font-orbitron">
        <h1 className="text-xl font-orbitron text-green-400 mb-6">Projects</h1>
        <p className="text-white text-md leading-10">
          <span className="text-green-400">Explore My Universe of Creations</span><br/><br/>
          My projects are cosmic experiments—where AI, real-time tech, and creative design collide.<br/><br/>
          <b className="text-green-400">BoozeAI – Your Pocket Bartender</b><br/>
          <span className="text-white">An AI-powered cocktail app that mixes mood, weather, and your favorite ingredients to craft the perfect drink. Built with React Native, Node.js, and Gemini LLM, BoozeAI features smart recommendations, a Truth or Dare mini-game, and a shop locator for cosmic convenience. Firebase Auth keeps your journey secure, while Google AdMob fuels the adventure. <a href="https://github.com/SwayamDebata/BoozeAI" target="_blank" rel="noreferrer" className="text-green-400 underline">View on GitHub</a> | <a href="https://play.google.com/store/apps/details?id=com.boozeai_frontend" target="_blank" rel="noreferrer" className="text-green-400 underline">Play Store: BoozeAI</a></span><br/><br/>
          <b className="text-green-400">MuseAI – Real-time Group Chat with AI</b><br/>
          <span className="text-white">A next-gen group chat platform built with Next.js 14, TypeScript, and CometChat SDK. MuseAI delivers sub-200ms message speeds, AI-powered slash commands (/askAI), and WhatsApp-style UI/UX with dark/light themes. OTP authentication and Zustand-powered state management keep your crew in sync. <a href="https://github.com/SwayamDebata/MuseAI" target="_blank" className="text-green-400 underline">View on GitHub</a> | <span className="text-green-400">Live Preview: MuseAI</span></span><br/><br/>
          <b className="text-green-400">CometChat UI Kits & AI Agent</b><br/>
          <span className="text-white">At CometChat, I’ve engineered customizable chat UI kits for React, Angular, and Vue, implemented advanced messaging features (mentions, scheduling, form messages), and built AI-driven automation tools like the Visual Chat Builder. My work has reduced customer issues by 30% and accelerated release cycles. <a href="https://linktr.ee/swayam_devta" target="_blank" className="text-green-400 underline">See my key contributions</a></span><br/><br/>
          <span className="text-green-400">Every project is a new star in my constellation—where code meets creativity and innovation knows no bounds.</span><br/><br/>
          <b className="text-xl"><TypeAnimation
            sequence={["Click on the UFO to enter my world of projects", 7000]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            className="text-green-400 text-lg font-orbitron"
          /></b>
        </p>
      </div>
    </div>
  );
};
export default Projects;
