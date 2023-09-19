import { useRef } from "react";

export default function SpriteAnimation() {
  const spriteAnimationRef = useRef(null);
  return (
    <>
      <div className="backgroundContainer">
        <div className="containerSprite">
          <div className="spriteAnimation" ref={spriteAnimationRef}></div>
        </div>
      </div>
    </>
  );
}
