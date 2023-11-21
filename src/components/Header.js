import React from 'react'
import Navbar from './Navbar'
import bg from '../assets/images/stars.png'
import logo from '../assets/images/logo.png'
import { TypeAnimation } from 'react-type-animation';
import { RESUME_URL } from '../constant';


const Header = () => {
return (
<>
<div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-repeat h-screen flex flex-col tl:flex-col'>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6 tl:flex-col ">
        <div className="content lg:text-center justify-between">
        <div className="py-3">
        <h1 className='text-green-400 pt-5 p-4 text-3xl font-press_start'>
        <TypeAnimation
        sequence={[
            'Hi! I am Swayam Devta',
            7000,
        ]}
        />
        </h1>
            <p className='text-white p-4 text-xl font-press_start'>Welcome to</p>
            <p className='text-white p-4 pt-1 text-xl font-press_start'>My Portfolio</p>
            <a href={RESUME_URL} target='_blank'><button className='text-white text-2md m-3 font-press_start border-2 border-white rounded-2-xl p-2 hover:bg-green-600'>My Resume</button></a>
        </div>
        </div>
        <img className='w-80 h-auto mt-[30px] rounded-full tl:w-[200px] ' src={logo} alt="" />
    </div>
</div>
</>
)
}

export default Header;