import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import backgroundMusic from "../assets/music/Ancient-Mars.mp3"; 

const SpaceRadio = ({ onClick }) => {
  const { nodes, materials } = useGLTF("/assets/space_age_radio.glb");
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; 
    }
  });

  if (!nodes["Object_2"] || !materials["None"]) {
    return null;
  }

  return (
    <group
      ref={groupRef}
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1.5, 1.5, 1.5]}
      onClick={onClick}
    >
      <mesh geometry={nodes["Object_2"].geometry} material={materials["None"]} />
    </group>
  );
};

const SpaceRadioPlayer = () => {
  const audioRef = useRef(new Audio(backgroundMusic)); 
  audioRef.current.loop = true;
  const handlePlayMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <Canvas
        className="absolute top-0"
        style={{
          height: "400px",
          width: "400px",
          position: "relative",
        }}
        camera={{
          position: [0, 2, 30],
          fov: 60,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2.5} />
          <directionalLight position={[20, 20, 20]} intensity={2} />
          <SpaceRadio onClick={handlePlayMusic} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceRadioPlayer;
