import { SpriteAnimator } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function Sprite() {
  return (
    <div style={{ width: "32px", height: "32px" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          position: [0, 0, 100],
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
            scale={[100, 100, 100]}
            position={[0, 11.3, -45]}
            startFrame={0}
            autoPlay={true}
            loop={true}
            numberOfFrames={120}
            alphaTest={0.01}
            textureImageURL={"./cars.png"}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
