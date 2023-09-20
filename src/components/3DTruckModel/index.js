import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/3DTruckModel/TruckLowPoly";

export default function ThreeD() {
  return (
    <div className="canvas">
      <Canvas camera={{ position: [0, 10, -20], fov: 45 }}>
        <OrbitControls />
        <directionalLight color="blue" position={[-2, 2, 0]} intensity={1.5} />
        <directionalLight
          color="hotpink"
          position={[0.5, -2, -1]}
          intensity={0.8}
        />
        <ambientLight intensity={3} position={[0, 0, 5]} />
        <Suspense>
          <Model position={[0, 0, 0]} scale={3} />
        </Suspense>
      </Canvas>
    </div>
  );
}
