import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import AnimatedCursor from "react-animated-cursor";
import ParticlesBackground from "./components/ParticlesBackground";
import SpaceRadioPlayer from "./components/SpaceRadio";
import UfoForProjects from "./components/UfoForProjects";


function App() {
return (
    <>  
    <div> 
    <ParticlesBackground/>
    <div className="cursor__dot">
        <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="0, 255, 0"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        />
    </div>
        <Header />
        <SpaceRadioPlayer/>
        <About/>
        <Skills />
        <Projects/>
        <UfoForProjects/>
        <Footer />
        </div>
    </>
);
}

export default App;
