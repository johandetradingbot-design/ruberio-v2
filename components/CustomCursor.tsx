"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 6}px, ${mouse.y - 6}px, 0) translateZ(0)`;
      }
    };

    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 16}px, ${ring.y - 16}px, 0) translateZ(0)`;
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    let animationFrameId = window.requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden h-[12px] w-[12px] rounded-full bg-[#ff3300] mix-blend-difference md:block"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translateZ(0)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden h-[32px] w-[32px] rounded-full border border-[#ff3300]/50 md:block"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px, -100px, 0) translateZ(0)",
        }}
      />
    </>
  );
}
