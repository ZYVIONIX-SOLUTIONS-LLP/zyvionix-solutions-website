"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const icons = [
  "/icons/react.png",
  "/icons/node.png",
  "/icons/github.png",
  "/icons/figma.png",
  "/icons/docker.png",
  "/icons/aws.png",
  "/icons/ai.png"
];

export default function IconFloat() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes: HTMLDivElement[] = [];

    icons.forEach((icon) => {
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.left = `${Math.random() * 90}%`;
      wrapper.style.top = `${Math.random() * 90}%`;
      wrapper.style.animation = `float ${6 + Math.random() * 6}s ease-in-out infinite`;
      wrapper.style.pointerEvents = "none";

      wrapper.innerHTML = `
        <img src="${icon}" width="60" height="60" style="border-radius:50%" />
      `;

      container.appendChild(wrapper);
      nodes.push(wrapper);
    });

    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        overflow: "hidden"
      }}
    />
  );
}