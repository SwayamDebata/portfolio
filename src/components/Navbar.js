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
      <div className="navbarcon flex justify-between items-center px-20 py-6 z-40 w-full font-orbitron bg-transparent text-white lg:px-6">
        {/* Logo */}
        <h1 className="text-lg font-bold hover:text-green-400">Swayam.Dev</h1>

        {/* Desktop Menu (Hidden on Mobile, Flex on larger screens) */}
        <ul className="hidden lg:flex gap-10 text-lg">
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#about")}>About Me</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#skill")}>Skills</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#project")}>Projects</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#footer")}>Let's Connect</button>
          </li>
        </ul>

        {/* UFO Hamburger Menu (Visible Only on Mobile) */}
        <div
          className="lg:hidden relative cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* UFO Shape */}
          <UFOBeamMenu />
        </div>
      </div>

      {/* Mobile Menu (Visible Only on Mobile) */}
      {menuOpen && (
        <div className="absolute top-20 left-28 mt-4 w-full text-white p-6 font-orbitron lg:hidden">
        <ul className="flex flex-col gap-6 items-center">  {/* Align items to center */}
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#about")}>About Me</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#skill")}>Skills</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#project")}>Projects</button>
          </li>
          <li className="hover:text-green-400">
            <button onClick={() => scrollToSection("#footer")}>Let's Connect</button>
          </li>
        </ul>
      </div>
      
      )}
    </>
  );
};

export default Navbar;
