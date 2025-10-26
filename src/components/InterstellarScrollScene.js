import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";


// Abstract cosmic shape: morphing torus knot
function MorphingTorusKnot({ scrollY }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      // Morph scale and rotation with scroll
      ref.current.scale.x = 1 + Math.sin(scrollY / 120) * 0.4;
      ref.current.scale.y = 1 + Math.cos(scrollY / 140) * 0.4;
      ref.current.rotation.x = scrollY / 180;
      ref.current.rotation.y = scrollY / 220;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <torusKnotGeometry args={[1.1, 0.22, 120, 16, 2, 3]} />
      <meshStandardMaterial color="#39ff14" transparent opacity={0.18} wireframe={true} />
    </mesh>
  );
}

// Animated lines (cosmic rays)
function CosmicLines({ scrollY }) {
  const groupRef = useRef();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(scrollY / 100) * 0.5;
    }
  });
  // Create several lines radiating from center
  const lines = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const points = [
      new THREE.Vector3(0, 0, -2),
      new THREE.Vector3(Math.cos(angle) * (1.8 + Math.sin(scrollY / 80) * 0.5), Math.sin(angle) * (1.8 + Math.cos(scrollY / 80) * 0.5), -2)
    ];
    return (
      <line key={i}>
        <bufferGeometry attach="geometry" setFromPoints={points} />
        <lineBasicMaterial color="#39ff14" transparent opacity={0.18} />
      </line>
    );
  });
  return <group ref={groupRef}>{lines}</group>;
}


const InterstellarScrollScene = () => {
  const [scrollY, setScrollY] = useState(0);

  // Calculate which section we're in (every ~window.innerHeight)
  const [section, setSection] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setSection(Math.floor(window.scrollY / window.innerHeight));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Responsive horizontal shift and scale for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const horizontalShift = isMobile
    ? (section % 2 === 0 ? 1.2 : -2.2)
    : (section % 2 === 0 ? 3 : -6);
  const scale = isMobile ? 0.6 : 1;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [horizontalShift, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={1.2} />
        <group position={[horizontalShift, 0, 0]} scale={[scale, scale, scale]}>
          <MorphingTorusKnot scrollY={scrollY} />
          <CosmicLines scrollY={scrollY} />
        </group>
      </Canvas>
    </div>
  );
};

export default InterstellarScrollScene;
