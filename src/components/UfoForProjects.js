import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const UFOModel = () => {
  const ufoRef = useRef();
  const { nodes, materials } = useGLTF("/assets/ufo.glb");

  useFrame(() => {
    if (ufoRef.current) {
      ufoRef.current.rotation.z += 0.1; // Rotate on the Z-axis
    }
  });

  if (!nodes || !materials || !nodes.Cube_0 || !materials["Material-material"]) {
    console.error("Missing nodes or materials in the GLTF file.");
    return null; // Return early if data is missing
  }

  return (
    <group ref={ufoRef} rotation={[-Math.PI / 2, Math.PI / 24, 0]} scale={[2.8, 2.8, 2.8]}>
      <mesh geometry={nodes.Cube_0.geometry} material={materials["Material-material"]} />
    </group>
  );
};

const UfoForProjects = () => {
  const handleRedirect = () => {
    window.open("https://linktr.ee/swayam_devta", "_blank"); // Replace with your actual Linktree URL
  };

  return (
    <>
    <div
      className="relative flex flex-col items-center lg:mt-48 mt-80 mb-24"
      onClick={handleRedirect} // Redirect on click
    >
      {/* 3D UFO Canvas */}
      <Canvas
        className="absolute top-0"
        style={{
          height: "300px",
          width: "300px",
          position: "relative",
          marginTop:'200px'
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <UFOModel />
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
    </>
  );
};

export default UfoForProjects;
