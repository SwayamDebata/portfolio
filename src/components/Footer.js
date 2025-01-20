import React from "react";
import spotify from "../assets/images/spotify.svg";
import instagram from  "../assets/images/instagram.png";
import linkedin from  "../assets/images/linkedin.png";
import github from  "../assets/images/github.png";
import gmail from  "../assets/images/gmail.png";
import bmc from "../assets/images/greeen-button.png";


import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  IG_PROFILE_URL,
  MAIL_ME,
} from "../constant";

const Footer = () => {
  return (
    <div id="footer" className="mt-72 lg:mt-0">
      <h1 className="text-lg font-orbitron pt-[150px] text-green-400 text-center">
      Made with love, light years away
      </h1>

      {/* Top Section - Copyright and Made With */}
      {/* <div className="text-center lg:text-left mb-8 lg:mb-0">
        <p>Copyright © 2023 - All rights reserved</p>
        <p className="pt-4 text-md border-b-2 w-[200px] mx-auto lg:mx-0">
          Made with love, light years away
        </p>
      </div> */}

      {/* Middle Section - Tech Stack & Spotify */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-center bg-cover bg-repeat py-10 px-6 font-orbitron text-white text-md">
        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 lg:mb-0">
          <p className="py-2 text-green-300 text-xs">React</p>
          <p className="py-2 text-green-300 text-xs">ThreeJS</p>
          <p className="py-2 text-green-300 text-xs">ParticleJS</p>
          <p className="py-2 text-green-300 text-xs">Tailwind</p>
          <p className="py-2 text-green-300 text-xs">CSS3</p>
          <p className="py-2 text-green-300 text-xs">20 cups of coffee</p>
          <p className="py-2 text-green-300 text-xs">Coding Snack: Pizza, of course!</p>
          <p className="py-2 text-green-300 text-xs">Hours spent: Too many to count</p>
          <p className="py-2 text-green-300 hover:text-green-500 text-xs">
            <a
              href="https://open.spotify.com/track/7MJQ9Nfxzh8LPZ9e9u68Fq?si=1840e3631eff42ec"
              target="_blank"
            >
              Eminem - Lose Yourself
            </a>
            <img src={spotify} className="w-5 h-5 inline ml-2" alt="Spotify" />
          </p>
        </div>
      </div>

      <h1 className="text-xl font-orbitron pb-[50px] text-green-400 text-center">
      Let's Connect
      </h1>

      {/* Bottom Section - Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
  {/* GitHub Icon */}
  <a
    href={GITHUB_PROFILE_URL}
    target="_blank"
    className="transition-transform hover:scale-110"
  >
    <img
      src={github}
      alt="GitHub"
      className="w-10 h-10 border rounded-full"
    />
  </a>

  {/* LinkedIn Icon */}
  <a
    href={LINKEDIN_PROFILE_URL}
    target="_blank"
    className="transition-transform hover:scale-110"
  >
    <img
      src={linkedin}
      alt="LinkedIn"
      className="w-10 h-10"
    />
  </a>

  {/* Instagram Icon */}
  <a
    href={IG_PROFILE_URL}
    target="_blank"
    className="transition-transform hover:scale-110"
  >
    <img
      src={instagram}
      alt="Instagram"
      className="w-10 h-10"
    />
  </a>

  {/* Gmail Icon */}
  <a href={MAIL_ME} target="_blank">
    <img
      src={gmail}
      alt="Gmail"
      className="w-10 h-10"
    />
  </a>
  <a href="https://www.buymeacoffee.com/swayam_dev" target="_blank">
    <img
      src={bmc}
      alt="bmc"
      className="w-36 h-11"
    />
  </a>
</div>

    </div>
  );
};

export default Footer;
