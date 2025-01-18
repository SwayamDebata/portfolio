import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { RESUME_URL } from "../constant";

const Header = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div id="home" className="bg-center bg-cover bg-repeat h-screen flex flex-col tl:flex-col mb-72 lg:mb-0">
        <Navbar />

        {showPopup && (
  <div
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 border-2 border-green-400 text-white px-6 py-4 rounded-md z-50 shadow-lg flex flex-col items-center"
  >
    <button
      className="absolute top-2 right-2 text-white hover:text-red-500 text-xl font-bold"
      onClick={closePopup}
    >
      ✕
    </button>
    <p className="text-center text-lg mb-4 font-orbitron mt-10">
      To turn on music, click the radio below!
    </p>
  </div>
)}


        <div className="wrapper flex flex-col lg:flex-row justify-between items-center h-screen w-full px-6 lg:px-20 mt-20 lg:mt-0">
          <div className="content text-center lg:text-left lg:w-1/2">
            <div className="py-3">
              <h1 className="text-green-400 pt-5 p-4 text-3xl font-orbitron">
                <TypeAnimation
                  sequence={["Hi! I am Swayam", 7000]}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-white p-4 text-xl font-orbitron">Welcome to</p>
              <p className="text-white p-4 pt-1 text-xl font-orbitron">
                My Portfolio
              </p>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <button className="text-white text-2md m-3 font-orbitron border-2 border-white rounded-2-xl p-2 hover:bg-green-600">
                  My Resume
                </button>
              </a>
            </div>
          </div>

          <img
            className="w-80 h-auto mt-8 rounded-full tl:w-[200px] lg:w-1/3"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
