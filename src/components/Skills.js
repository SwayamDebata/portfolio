import React from "react";
import { HTML_DOC_URL, CSS_DOC_URL, JS_DOC_URL, TAILWIND_DOC_URL, TS_DOC_URL, FIGMA_DOC_URL, REACT_DOC_URL, JAVA_DOC_URL, MYSQL_DOC_URL, GIT_DOC_URL, ANGULAR_DOC_URL, VUE_DOC_URL, NODE_DOC_URL } from "../constant";
import html from '../assets/images/skill/html.png';
import css3 from '../assets/images/skill/css3.png';
import javascript from '../assets/images/skill/javascript.png';
import react from '../assets/images/skill/react.png';
import tailwind from '../assets/images/skill/tailwind.png';
import bootstrap from '../assets/images/skill/bootstrap.png';
import java from '../assets/images/skill/java.png';
import mysql from '../assets/images/skill/mysql.png';
import git from '../assets/images/skill/git.png';
import typescript from '../assets/images/skill/typescript.png';
import figma from '../assets/images/skill/figma.png';
import angular from '../assets/images/skill/angular.png';
import node from '../assets/images/skill/nodejs.png';
import vue from '../assets/images/skill/vue.png'



const Skills = () => {
  return (
    <>
    <div id="skill" className="flex items-center justify-center bg-center bg-repeat h-screen w-full mt-24 lg:mt-0 mb-[550px]">
      <div className=' bg-center pt-[120px] bg-cover bg-repeat h-screen flex flex-col tl:flex-col'>
      
      <h1 className="text-xl font-orbitron text-green-400 text-center items-center tl:pt-[220px]">SKILLS</h1>
      <div className="flex flex-wrap justify-center gap-6">
      <a href={HTML_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={html} alt="" /></a>
      <a href={CSS_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={css3} alt="" /></a>
      <a href={JS_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={javascript} alt="" /></a>
      <a href={REACT_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={react} alt="" /></a>
      <a href={NODE_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={node} alt="" /></a>
      <a href={ANGULAR_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={angular} alt="" /></a>
      <a href={VUE_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={vue} alt="" /></a>
      <a href={TAILWIND_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={tailwind} alt="" /></a>
      <a href={TS_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={typescript} alt="" /></a>
      <a href={FIGMA_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={figma} alt="" /></a>
      <a href={JAVA_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={java} alt="" /></a>
      <a href={MYSQL_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={mysql} alt="" /></a>
      {/* <a href={GIT_DOC_URL} target="_blank"><img className='w-20 h-auto mt-[30px]' src={git} alt="" /></a> */}
      </div>
      </div>
    </div>
    </>
  );
}

export default Skills;
