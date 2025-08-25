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
    isMobile ? "/fireplace_4k.exr" : "/fireplace_4k.exr"
  );
  texture.mapping = EquirectangularReflectionMapping;
  return <primitive attach="background" object={texture} />;
}

function MotorModel() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const { scene } = useGLTF("/programmer_desktop_3d_pc.glb");
  const ref = useRef<Mesh>(null);
  return <primitive ref={ref} object={scene} scale={isMobile ? 0.2 : 0.3} />;
}

export default function Scene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative w-full h-screen ">
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

      <div className="absolute px-3 top-0 left-0 w-full h-full py-2 flex flex-col items-center mt-15 md:items-start text-white z-10 pointer-events-none">
        <div className="flex flex-col bg-black opacity-55 p-4 gap-y-3">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-green-500">Arindam Sharma</span>
          </h1>
          <h1 className="text-sky-500 font-semibold text-3xl">
            Full Stack Wizard.
          </h1>
          <h1 className="text-sky-500 font-semibold text-3xl">Freelancer.</h1>
          <h1 className="text-sky-500 font-semibold text-3xl">
            Converts <span className="text-blue-700 font-bold">air</span> into
            &nbsp;
            <span className="text-blue-700 font-semibold">code.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
