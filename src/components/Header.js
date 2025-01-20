import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { RESUME_URL } from "../constant";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="bg-center bg-cover bg-repeat h-screen flex flex-col tl:flex-col mb-40 lg:mb-0"
      >
        <Navbar />
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center h-screen w-full px-6 lg:px-20 mt-20 lg:mt-0">
          <div className="content text-center lg:text-left lg:w-1/2">
            <div className="py-3">
              <h1 className="text-green-400 pt-5 p-4 text-3xl font-orbitron">
                <TypeAnimation
                  sequence={["Hi! I am Swayam", 7000]}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-white p-4 text-xl font-orbitron">
                Let's explore my universe
              </p>
              <p className="text-white p-4 pt-1 text-md font-orbitron">
                a developer navigating the cosmos of design and technology!
              </p>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <button className="text-white text-2md m-3 font-orbitron border-2 border-white rounded-2-xl p-2 hover:bg-green-600">
                  Launch Resume
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
        <div className="text-center mt-10">
          <TypeAnimation
            sequence={["Click on the space radio below to play music", 7000]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            className="text-green-400 text-lg font-orbitron"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
