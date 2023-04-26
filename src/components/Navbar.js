import React,{useState} from "react";

const Navbar = () =>{
  const [scroll, setScroll] = useState(false);
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillSection = document.querySelector("#skill");
    skillSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectSection = document.querySelector("#project");
    projectSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    const footerSection = document.querySelector("#footer");
    footerSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);
  return (
    <>
    <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 w-full font-press_start">
    <h1 className="text-lg  font-bold hover:text-green-400">Swayam.Dev</h1>
    <ul className=" flex gap-10 text-md mr-4 lg:flex-col lg:gap-6 ">
            <li className="hover:text-green-400 bla">
              <button onClick={scrollToAbout}>About Me</button>
            </li>
            <li className="hover:text-green-400 bla">
              <button onClick={scrollToSkills} >Skills</button>
            </li>
            <li className="hover:text-green-400 bla">
              <button onClick={scrollToProjects}>Projects</button>
            </li>
            <li className="hover:text-green-400 bla">
              <button onClick={scrollToFooter}>Let's connect</button>
            </li>
    </ul>
    </div>
  </>
  );
}

export default Navbar;
