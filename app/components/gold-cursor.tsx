"use client";

import React, { useEffect, useRef, useState } from "react";

export default function GoldCursor() {
  const requestRef = useRef<number | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const [renderPos, setRenderPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemov", onMove);

    const ease = 0.1; // smaller = slower catch-up

    const animate = () => {
      // ease current toward target
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;
      // update state to re-render
      setRenderPos({ x: currentRef.current.x, y: currentRef.current.y });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const size = 6; // px
  const offsetY = 40; // px below cursor
  const offsetX = 15; 
  const darkGold = "#806023";

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
       left: `${renderPos.x + offsetX - size / 2}px`,
        top: `${renderPos.y + offsetY - size / 2}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: darkGold,
        boxShadow: "0 0 6px rgba(201,162,90,0.95)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "background-color 150ms",
      }}
    />
  );
}
