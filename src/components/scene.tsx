"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh, EquirectangularReflectionMapping } from "three";
import { EXRLoader } from "three-stdlib";

function HDRBackground() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const texture = useLoader(
    EXRLoader,
    isMobile ? "/forest.exr" : "/forest.exr"
  );
  texture.mapping = EquirectangularReflectionMapping;
  return <primitive attach="background" object={texture} />;
}

function MotorModel() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const { scene } = useGLTF("/motor.glb");
  const ref = useRef<Mesh>(null);
  return <primitive ref={ref} object={scene} scale={isMobile ? 0.5 : 1} />;
}

export default function Scene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative w-full h-[90vh] md:h-screen ">
      {/* 3D Background */}
      <Canvas
        camera={{
          position: isMobile ? [0, 0, 3] : [0, 0, 5],
          fov: isMobile ? 75 : 60,
        }}
      >
        <Suspense fallback={null}>
          <HDRBackground />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <MotorModel />
          <OrbitControls enableDamping enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>

      {/* HTML Overlay */}
      <div className="absolute px-3 top-0 left-0 w-full h-full py-5 flex flex-col items-center justify-between text-white z-10 pointer-events-none">
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          Precision CNC Parts Shipped as Fast as Tomorrow.
        </h1>
        <div className="lg:w-[500px]">
          <p className="text-center">
            Update your CAD file, and we&apos;ll take care of matching,
            finishing and shipping - accurate parts delievered fast, no stress
          </p>
          <button className="mt-6 px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 rounded-lg pointer-events-auto">
            Upload Your Design
          </button>
        </div>
      </div>
    </div>
  );
}
