"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function GsapLenisSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <GsapLenisSync />
      {children}
    </ReactLenis>
  );
}
