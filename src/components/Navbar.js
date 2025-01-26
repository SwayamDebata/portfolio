import React, { useState } from "react";
import UFOBeamMenu from "./UFOBeamMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="navbarcon flex justify-between items-center px-6 lg:px-20 py-6 z-40 w-full font-orbitron bg-transparent text-white">
        {/* Logo */}
        <h1 className="text-lg font-bold hover:text-green-400">Swayam.Dev</h1>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-10">
          {/* UFO Model */}
          <div className="flex items-center">
            <UFOBeamMenu />
          </div>

          {/* Menu Items */}
          <ul className="flex gap-6 text-lg">
            <li className="hover:text-green-400">
              <button onClick={() => scrollToSection("#about")}>About Me</button>
            </li>
            <li className="hover:text-green-400">
              <button onClick={() => scrollToSection("#skill")}>Skills</button>
            </li>
            <li className="hover:text-green-400">
              <button onClick={() => scrollToSection("#projects")}>Projects</button>
            </li>
            <li className="hover:text-green-400">
              <button onClick={() => scrollToSection("#footer")}>Let's Connect</button>
            </li>
          </ul>
        </div>

        {/* Mobile Layout */}
        <div
          className="lg:hidden flex flex-col items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* UFO Model */}
          <UFOBeamMenu />

          {/* Menu Items (Toggle Visibility) */}
          {menuOpen && (
            <ul className="flex flex-col gap-6 items-center -mt-12 bg-opacity-80 p-4 rounded-md shadow-lg w-[90%] max-w-xs z-50">
              <li className="hover:text-green-400">
                <button onClick={() => scrollToSection("#about")}>About Me</button>
              </li>
              <li className="hover:text-green-400">
                <button onClick={() => scrollToSection("#skill")}>Skills</button>
              </li>
              <li className="hover:text-green-400">
                <button onClick={() => scrollToSection("#projects")}>Projects</button>
              </li>
              <li className="hover:text-green-400">
                <button onClick={() => scrollToSection("#footer")}>
                  Let's Connect
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
