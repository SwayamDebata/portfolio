import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const UFOModel = () => {
  const ufoRef = useRef();
  const { nodes, materials } = useGLTF("/assets/ufo.glb");

  // Always call the hook unconditionally
  useFrame(() => {
    if (ufoRef.current) {
      ufoRef.current.rotation.z += 0.1; // Rotate only on the Y-axis
    }
  });

  // Safeguard against missing nodes or materials
  if (!nodes || !materials || !nodes.Cube_0 || !materials["Material-material"]) {
    console.error("Missing nodes or materials in the GLTF file.");
    return null; // Return early if data is missing
  }

  return (
    <group ref={ufoRef} rotation={[-Math.PI / 2, Math.PI / 24, 0]}>
      <mesh geometry={nodes.Cube_0.geometry} material={materials["Material-material"]} />
    </group>
  );
};



const UFOBeamMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="lg:hidden relative flex flex-col items-center"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {/* 3D UFO Canvas */}
      <Canvas
        className="absolute top-0"
        style={{
          height: "150px",
          width: "150px",
          position: "relative",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <UFOModel />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div
        className={`absolute top-[10px] left-1/2 transform -translate-x-1/2 w-20 h-72 bg-gradient-to-b from-green-400 to-transparent rounded-b-full transition-transform duration-300 ${
          menuOpen ? "scale-100" : "scale-0"
        }`}
        style={{
          clipPath: "polygon(30% 30%, 5% 100%, 95% 100%, 70% 30%)",
        }}
      ></div>
    </div>
  );
};

export default UFOBeamMenu;
