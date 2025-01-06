import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center bg-center bg-repeat h-screen w-full mt-20 lg:mt-0"
    >
      <div className="text-center max-w-5xl p-10 font-orbitron">
        {/* Title */}
        <h1 className="text-xl font-orbitron text-green-400 mb-6">ABOUT ME</h1>

        {/* Content */}
        <p className="text-white text-md leading-10">
          Hello, My name is Swayam Debata and I'm from Bhubaneswar, Odisha. 
          I'm currently pursuing my bachelor of technology in computer science Engineering. 
          My technical skills include programming in Java, JavaScript, Database. 
          I'm also familiar with several web technologies like HTML5, CSS3, React js, Tailwind, Bootstrap, etc. 
          I always want to become successful in the field of software engineering technology by channelizing my technical skills to ensure professional and personal growth.
          <br /><br />
          Hobbies: Poetry, Storytelling, Travelling, Photography
        </p>
      </div>
    </div>
  );
};

export default About;
