"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
      });
    }
  }, []);

  return null;
}