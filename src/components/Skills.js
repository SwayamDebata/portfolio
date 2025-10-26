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
      <div id="skill" className="flex items-center justify-center bg-center bg-repeat min-h-screen w-full mt-10 lg:mt-0 mb-20 px-2 sm:px-4">
        <div className='bg-center pt-10 sm:pt-24 bg-cover bg-repeat min-h-screen flex flex-col tl:flex-col'>
          <h1 className="text-xl sm:text-2xl font-orbitron text-green-400 text-center items-center pt-8 sm:pt-24">SKILLS</h1>
          <p className="text-white text-md sm:text-lg text-center mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto font-orbitron">
            <span className="text-green-400">Tech Stack from Across the Galaxy</span><br/>
            My toolkit is a constellation of languages, frameworks, and tools—each one a star powering my cosmic coding adventures.<br/><br/>
            <span className="text-green-400">Languages & Frameworks:</span> JavaScript (ES6+), TypeScript, React.js, Next.js, React Native, AngularJS, Vue.js, Node.js, Java, RxJS<br/>
            <span className="text-green-400">AI & Automation:</span> LLMs, LangChain, LangGraph, Mastra, Agentic AI, MCP Servers, Conversational AI, Prompt Engineering, NLP, Embeddings<br/>
            <span className="text-green-400">Databases:</span> MongoDB, MySQL, MS SQL Server, Redis, Firebase<br/>
            <span className="text-green-400">Frontend/UI:</span> HTML5, CSS3, Tailwind CSS, Bootstrap, Redux, Zustand, Material-UI, Styled Components, Responsive Design<br/>
            <span className="text-green-400">Backend/Architecture:</span> REST APIs, GraphQL, WebSockets, Microservices<br/>
            <span className="text-green-400">Cloud & DevOps:</span> AWS, Vercel, Netlify, Docker, CI/CD, Git, GitHub Actions<br/>
            <span className="text-green-400">Testing & Tools:</span> Jest, Cypress, Playwright, Postman, ESLint, Prettier, Axios, Figma, Adobe XD<br/>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={HTML_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={html} alt="HTML" /></a>
            <a href={CSS_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={css3} alt="CSS3" /></a>
            <a href={JS_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={javascript} alt="JavaScript" /></a>
            <a href={REACT_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={react} alt="React" /></a>
            <a href={NODE_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={node} alt="Node.js" /></a>
            <a href={ANGULAR_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={angular} alt="Angular" /></a>
            <a href={VUE_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={vue} alt="Vue" /></a>
            <a href={TAILWIND_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={tailwind} alt="Tailwind" /></a>
            <a href={TS_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={typescript} alt="TypeScript" /></a>
            <a href={FIGMA_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={figma} alt="Figma" /></a>
            <a href={JAVA_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={java} alt="Java" /></a>
            <a href={MYSQL_DOC_URL} target="_blank" rel="noreferrer"><img className='w-20 h-auto mt-[30px]' src={mysql} alt="MySQL" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
