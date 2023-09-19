import { SpriteAnimator } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function Sprite() {
  return (
    <Canvas
      camera={{
        position: [10, 150, -80],
        fov: "45",
        far: 1000,
        near: 0.1,
        aspectRatio: window.innerWidth / window.innerHeight,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <SpriteAnimator
          scale={[32, 32, 32]}
          position={[3, -5.0, 1]}
          startFrame={10}
          autoPlay={true}
          loop={true}
          numberOfFrames={120}
          alphaTest={0.01}
          textureImageURL={"./cars.png"}
        />
      </Suspense>
    </Canvas>
  );
}
