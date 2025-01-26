import React from "react";
import spotify from "../assets/images/spotify.svg";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import bmc from "../assets/images/greeen-button.png";

import { TypeAnimation } from "react-type-animation";

import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  IG_PROFILE_URL,
  MAIL_ME,
} from "../constant";

const Footer = () => {
  return (
    <footer id="footer" className="mt-72 lg:mt-0 text-center text-white font-orbitron">
      {/* Header */}
      <h1 className="text-lg pt-16 text-green-400">Made with love, light years away</h1>

      {/* Middle Section - Tech Stack & Spotify */}
      <div className="flex flex-col justify-center items-center py-10 px-6 bg-center bg-cover text-md">
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {[
            "React",
            "ThreeJS",
            "ParticleJS",
            "Tailwind",
            "CSS3",
            "20 cups of coffee",
            "Coding Snack: Pizza, of course!",
            "Hours spent: Too many to count",
          ].map((item, index) => (
            <p key={index} className="py-2 text-green-300 text-xs">
              {item}
            </p>
          ))}

          <p className="py-2 text-green-300 hover:text-green-500 text-xs text-center">
            <a
              href="https://open.spotify.com/track/7MJQ9Nfxzh8LPZ9e9u68Fq?si=1840e3631eff42ec"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eminem - Lose Yourself
            </a>
            <img src={spotify} className="w-5 h-5 inline ml-2" alt="Spotify" />
          </p>
        </div>
      </div>

      {/* Let's Connect Section */}
      <h1 className="text-xl pb-6 text-green-400">Let's Connect</h1>

      {/* Bottom Section - Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        {[
          { href: GITHUB_PROFILE_URL, src: github, alt: "GitHub", size: "w-10 h-10", border: true },
          { href: LINKEDIN_PROFILE_URL, src: linkedin, alt: "LinkedIn", size: "w-10 h-10" },
          { href: IG_PROFILE_URL, src: instagram, alt: "Instagram", size: "w-10 h-10" },
          { href: MAIL_ME, src: gmail, alt: "Gmail", size: "w-10 h-10" },
        ].map(({ href, src, alt, size, border }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src={src}
              alt={alt}
              className={`${size} ${border ? "border rounded-full" : ""}`}
            />
          </a>
        ))}

        <a
          href="https://www.buymeacoffee.com/swayam_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img src={bmc} alt="Buy Me a Coffee" className="w-36 h-11" />
        </a>
      </div>

      {/* Quote Section with TypeAnimation */}
  <div className="mt-10 text-green-400 text-sm md:text-md lg:text-lg font-light px-4 max-w-3xl mx-auto">
        <TypeAnimation
          sequence={[
            `"The cosmos is within us. We are made of star-stuff."`,
            3000,
            `"Across the sea of space, the stars are other suns."`,
            3000,
            `"Shoot for the moon. Even if you miss, you'll land among the stars."`,
            3000,
            `"Not all those who wander are lost—some are just exploring the stars."`,
            3000,
            `"Through the void of darkness, the stars light our way home."`,
            3000,
            `"Space is the breath of art, infinite and unending."`,
            3000,
            `"Every star you see has a story, and so do you."`,
            3000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-center"
        />
      </div>
    </footer>
  );
};

export default Footer;
