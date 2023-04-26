import React from 'react';
import bg from '../assets/images/stars.png'
import bigbites from '../assets/images/bigbites.png'
import portfolio from '../assets/images/portfolio.png'
import portfolio2 from '../assets/images/portfolio2.png'
import { PROJECT_PORTFOLIO_URL, PROJECT_PORTFOLIO2_URL, PROJECT_BIGBITES_URL } from '../constant';

const Projects = () =>{
    return(
        <>
    <div id='project' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-repeat h-screen flex flex-col tl:flex-col'>
        <h1 className="text-xl font-press_start text-white text-center items-center">Projects</h1>
        <div className="flex flex-wrap justify-center w-full tl:justify-center gap-8 pt-5">
        <div className="w-[240px] h-[350px] rounded overflow-hidden shadow-lg">
        <img className="w-60 h-[160px]" src={bigbites} alt="bigbites"/>
        <div className="px-6 py-4">
        <div className="font-press_start text-sm mb-2 text-white border-b-4">Big bites</div>
        <p className="text-white text-xs font-press_start w-[230px]">
        Food delivery app(Swiggy API) using React.js, Parcel, Tailwind css.
        </p>
        <a href={PROJECT_BIGBITES_URL} target='_blank'><p className="border rounded-md w-[80px] font-press_start text-white text-center ml-[50px] hover:bg-green-500 ">code</p></a>
        </div>
        </div>
        <div className="w-[240px] h-[350px] rounded overflow-hidden shadow-lg">
        <img className="w-60 h-[160px]" src={portfolio} alt="bigbites"/>
        <div className="px-6 py-4">
        <div className="font-press_start text-sm mb-2 text-white border-b-4">Portfolio</div>
        <p className="text-white text-xs font-press_start w-[230px]">
        A Basic Portfolio using HTML5, CSS3, JavaScript.
        </p>
        <a href={PROJECT_PORTFOLIO_URL} target='_blank'><p className="border rounded-md w-[80px] font-press_start text-white text-center ml-[50px] mt-8 hover:bg-green-500">code</p></a>
        </div>
        </div>
        <div className="w-[240px] h-[350px] rounded overflow-hidden shadow-lg">
        <img className="w-60 h-[160px]" src={portfolio2} alt="bigbites"/>
        <div className="px-6 py-4">
        <div className="font-press_start text-sm mb-2 text-white border-b-4 w-[220px]">My Portfolio</div>
        <p className="text-white text-xs font-press_start w-[230px]">
        Modern portfolio using React, CSS, Tailwind, Parcel.
        </p>
        <a href={PROJECT_PORTFOLIO2_URL} target='_blank'><p className="border rounded-md w-[80px] font-press_start text-white text-center ml-[50px] mt-8 hover:bg-green-500">code</p></a>
        </div>
        </div>
        </div>
    </div>
        </>
    );
}
export default Projects;