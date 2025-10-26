import React from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { RESUME_URL } from "../constant";
// Starfield component


// UFO component
function UFO({ orbitRadius = 2.2, speed = 1.2 }) {
  const ref = React.useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * orbitRadius;
      ref.current.position.z = Math.sin(t) * orbitRadius;
      ref.current.position.y = 0.5 + Math.sin(t * 2) * 0.2;
      ref.current.rotation.y = -t + Math.PI / 2;
    }
  });
  return (
    <group ref={ref}>
      {/* Saucer */}
      <mesh>
        <cylinderGeometry args={[0.25, 0.5, 0.12, 32]} />
        <meshStandardMaterial color="#b0e0e6" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Dome */}
      <mesh position={[0, 0.11, 0]}>
        <sphereGeometry args={[0.18, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#e0ffff" transparent opacity={0.7} />
      </mesh>
      {/* Lights */}
      <mesh position={[0.22, -0.05, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#39ff14" />
      </mesh>
      <mesh position={[-0.22, -0.05, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#39ff14" />
      </mesh>
    </group>
  );
}



const Header = () => {
  return (
    <>
      <div
        id="home"
        className="bg-center bg-cover bg-repeat h-screen flex flex-col tl:flex-col mb-40 lg:mb-0"
      >
        <Navbar />
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center h-screen w-full px-6 lg:px-20 mt-20 lg:mt-0">
          <div className="content text-center lg:text-left lg:w-1/2">
            <div className="py-3">
              <h1 className="text-green-400 pt-5 p-4 text-3xl font-orbitron">
                <TypeAnimation
                  sequence={["Hi! I am Swayam", 7000]}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-white p-4 text-xl font-orbitron">
                Let's explore my universe
              </p>
              <p className="text-white p-4 pt-1 text-md font-orbitron">
                a developer navigating the cosmos of design and technology!
              </p>
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <button className="text-white text-2md m-3 font-orbitron border-2 border-white rounded-2-xl p-2 hover:bg-green-600">
                  Launch Resume
                </button>
              </a>
            </div>
          </div>

          <div className="w-80 h-80 mt-8 tl:w-[200px] lg:w-1/3 flex items-center justify-center">
            <div className="w-96 h-96 flex items-center justify-center">
              <div className="w-[400px] h-[400px] flex items-center justify-center">
                <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 2, 5]} intensity={1} />
                {/* Logo as a plane in the center */}
                {(() => {
                  const LogoPlane = () => {
                    const texture = useLoader(THREE.TextureLoader, logo);
                    return (
                      <mesh scale={[2.5, 2.5, 2.5]}>
                        <planeGeometry args={[1.5, 1.5]} />
                        <meshStandardMaterial map={texture} transparent={true} />
                      </mesh>
                    );
                  };
                  return <LogoPlane />;
                })()}
                <UFO orbitRadius={1.7} speed={1.2} />
                </Canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <TypeAnimation
            sequence={["Click on the space radio below to play music", 7000]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
            className="text-green-400 text-lg font-orbitron"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
