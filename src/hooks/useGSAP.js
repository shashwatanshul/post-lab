import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom hook for GSAP animations with cleanup
 * @param {Function} animationFunction - Function containing GSAP animations
 * @param {Array} dependencies - Dependencies array for useEffect
 * @param {Object} scope - Optional scope for GSAP context
 */
export const useGSAP = (animationFunction, dependencies = [], scope = null) => {
  const contextRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(animationFunction, scope);
    contextRef.current = ctx;

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return contextRef.current;
};

export default useGSAP;
