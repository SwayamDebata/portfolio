import React from "react";
import { HTML_DOC_URL, CSS_DOC_URL, JS_DOC_URL, TAILWIND_DOC_URL, BOOTSTRAP_DOC_URL, REACT_DOC_URL, JAVA_DOC_URL, MYSQL_DOC_URL, GIT_DOC_URL, BABEL_DOC_URL } from "../constant";
import html from '../assets/images/skill/html.png';
import css3 from '../assets/images/skill/css3.png';
import javascript from '../assets/images/skill/javascript.png';
import react from '../assets/images/skill/react.png';
import tailwind from '../assets/images/skill/tailwind.png';
import bootstrap from '../assets/images/skill/bootstrap.png';
import java from '../assets/images/skill/java.png';
import mysql from '../assets/images/skill/mysql.png';
import git from '../assets/images/skill/git.png';
import babel from '../assets/images/skill/babel.png';

const Skills = () => {
  return (
    <>
    <div id="skill" className="container">
      <div className=' bg-center pt-[120px] bg-cover bg-repeat h-screen flex flex-col tl:flex-col'>
      
      <h1 className="text-xl font-press_start text-white text-center items-center tl:pt-[220px]">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-6">
      <a href={HTML_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={html} alt="" /></a>
      <a href={CSS_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={css3} alt="" /></a>
      <a href={JS_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={javascript} alt="" /></a>
      <a href={REACT_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={react} alt="" /></a>
      <a href={TAILWIND_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={tailwind} alt="" /></a>
      <a href={BOOTSTRAP_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={bootstrap} alt="" /></a>
      <a href={JAVA_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={java} alt="" /></a>
      <a href={MYSQL_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={mysql} alt="" /></a>
      <a href={GIT_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={git} alt="" /></a>
      <a href={BABEL_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={babel} alt="" /></a>
      </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
