import * as THREE from "three";
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/3DTruckModel/TruckLowPoly";
import styles from "@/styles/threeD.module.scss";

export default function ThreeD({ rotationAngle }) {
  return (
    <div className={styles.canvas}>
      <Canvas camera={{ position: [0, 15, -15], fov: 45 }}>
        <directionalLight color="blue" position={[-2, 2, 0]} intensity={1.5} />
        <directionalLight
          color="hotpink"
          position={[0.5, -2, -1]}
          intensity={0.8}
        />
        <ambientLight intensity={3} position={[0, 0, 5]} />
        <Suspense>
          <Model position={[0, 0, 0]} scale={3} rotationAngle={rotationAngle} />
        </Suspense>
      </Canvas>
    </div>
  );
}
