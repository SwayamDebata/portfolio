import React from "react";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex items-center justify-center bg-center bg-repeat h-screen w-full mt-28 lg:mt-0"
    >
      <div className="text-center max-w-5xl p-10 font-orbitron">
        {/* Title */}
        <h1 className="text-xl font-orbitron text-green-400 mb-6">Projects</h1>
        {/* Content */}
        <p className="text-white text-md leading-10">
          My projects are a blend of innovation, design, and technical
          expertise, showcasing my dedication to building impactful solutions.
          At <b className="text-green-400">CometChat</b>, I contributed to developing and maintaining highly
          customizable <b className="text-green-400">Chat UI Kits</b> for <b className="text-green-400">React, Angular, and Vue</b>,
          empowering users to create seamless and interactive communication
          experiences. From implementing dynamic features like mentions and
          message scheduling to leading quality-focused initiatives like the Bug
          Squash process, my work here reflects my commitment to enhancing
          platform stability and user satisfaction. Beyond professional work, my
          personal projects are a playground for creativity:<br></br> <p className="text-left">- <b className="text-green-400">YouTube
          Clone</b>: A fully functional video search and playback platform
          leveraging <b className="text-lg">React</b> and <b className="text-lg">YouTube's public API</b>, crafted with a
          sleek, responsive design using Tailwind CSS.</p><br></br><p className="text-left"> - <b className="text-green-400">Quizzy</b>: A
          dynamic quiz app that challenges users while tracking scores, built
          with React.js and intuitive logic for real-time feedback and
          timer-based interactions.</p><br></br> <p className="text-left">- <b className="text-green-400">BigBites</b>: A feature-rich food delivery
          app, integrating Swiggy API for restaurant listings, designed with
          Shimmer UI, and built for seamless navigation with nested routing
          and secure login functionalities using Formik and Yup.</p><br></br> Each
          project combines clean, efficient code with an eye for design,
          reflecting my passion for both front-end and back-end development.
          These creations not only solve problems but also bring ideas to life
          in ways that are engaging and functional.<br></br><br></br><br></br><b className="text-xl">click on the UFO to enter the world of projects</b>

        </p>
      </div>
    </div>
  );
};
export default Projects;
