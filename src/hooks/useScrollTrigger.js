import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for ScrollTrigger animations
 * @param {Object} options - ScrollTrigger options
 * @param {Array} dependencies - Dependencies array for useEffect
 */
export const useScrollTrigger = (options = {}, dependencies = []) => {
  const elementRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    triggerRef.current = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
    });

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, dependencies);

  return elementRef;
};

export default useScrollTrigger;
