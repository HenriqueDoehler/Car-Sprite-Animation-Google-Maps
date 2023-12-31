import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ rotationAngle, ...props }) {
  const mesh = useRef(null);
  const targetRotation = useRef(0);
  console.log(rotationAngle);

  useEffect(() => {
    if (mesh.current) {
      targetRotation.current = THREE.MathUtils.degToRad(-rotationAngle);
    }
  }, [rotationAngle]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        targetRotation.current,
        0.1
      );
    }
  });

  const { nodes, materials } = useGLTF("/truckLowPoly.glb");
  return (
    <group {...props} dispose={null} ref={mesh}>
      <group rotation={[0, -Math.PI / 2, 0]} scale={1.188}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.dark} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.dark2} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.dark3} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.green2} />
      </group>
    </group>
  );
}

useGLTF.preload("/truckLowPoly.glb");
