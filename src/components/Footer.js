import React from "react";
import spotify from "../assets/images/spotify.svg";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  IG_PROFILE_URL,
  MAIL_ME,
} from "../constant";

const Footer = () => {
  return (
    <div id="footer" className="mt-72 lg:mt-0">
      <h1 className="text-xl font-orbitron pt-[150px] text-green-400 text-center">
        Let's Connect
      </h1>

      <div className="flex justify-between items-center bg-center bg-cover bg-repeat py-10 px-6 font-orbitron text-white text-md">
        <div className="flex flex-col">
          <p>Copyright © 2023 - All rights reserved</p>
          <p className="pt-4 text-xs border-b-2 w-[200px]">Made With..</p>
          <div className="flex flex-col pt-5">
            <p className="py-2 text-green-300">React</p>
            <p className="py-2 text-green-300">Tailwind</p>
            <p className="py-2 text-green-300">CSS3</p>
            <p className="py-2 text-md border-b-2 w-[200px] text-blue-500">
              ~_~
            </p>
            <p className="py-2 text-pink-400 pt-6">10 cups of coffee</p>
            <p className="py-2 text-pink-400 hover:text-green-500">
              <a
                href="https://open.spotify.com/track/7MJQ9Nfxzh8LPZ9e9u68Fq?si=1840e3631eff42ec"
                target="_blank"
              >
                Eminem - Lose Yourself
              </a>
              <img src={spotify} className="w-5 h-5 inline ml-2" alt="" />
            </p>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="flex flex-col justify-start items-center gap-4">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 bg-black border rounded-full"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              viewBox="0 0 256 256"
            >
              <path
                fill="#0A66C2"
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              />
            </svg>
          </a>
          <a
            href={IG_PROFILE_URL}
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="#c13584"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.689-.072-4.948-.072z" />
              <path d="M12 5.838c3.346 0 6.059 2.713 6.059 6.059 0 3.345-2.713 6.058-6.059 6.058-3.346 0-6.059-2.713-6.059-6.058 0-3.346 2.713-6.059 6.059-6.059zm0 9.122c1.674 0 3.059-1.385 3.059-3.059 0-1.674-1.385-3.059-3.059-3.059-1.674 0-3.059 1.385-3.059 3.059 0 1.674 1.385 3.059 3.059 3.059z" />
            </svg>
          </a>
          <a href={MAIL_ME} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 "
              viewBox="0 0 256 193"
            >
              <path
                fill="#4285F4"
                d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"
              />
              <path
                fill="#34A853"
                d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"
              />
              <path
                fill="#EA4335"
                d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
              />
              <path
                fill="#FBBC04"
                d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"
              />
              <path
                fill="#C5221F"
                d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
