"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Topbar() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = textRef.current.parentElement?.offsetWidth || 0;

      gsap.fromTo(
        textRef.current,
        { x: containerWidth },
        {
          x: -textWidth,
          duration: 15,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-red-600 text-white py-2 overflow-hidden relative">
      <div className="whitespace-nowrap font-semibold uppercase tracking-wide text-sm md:text-base" ref={textRef}>
        Bem-vindo à Hot Family! Hot dogs gourmet e hambúrgueres artesanais com sabor, qualidade e ousadia! 
      </div>
    </div>
  );
}
