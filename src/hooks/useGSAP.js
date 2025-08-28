// Import React hooks for managing side effects and mutable references
import { useEffect, useRef } from "react";
// Import GSAP animation library for creating animations
import { gsap } from "gsap";

/**
 * Custom React hook for GSAP animations with automatic cleanup and context management
 * Provides a safe way to use GSAP animations in React components with proper cleanup
 *
 * @param {Function} animationFunction - Function containing GSAP animation code to execute
 * @param {Array} dependencies - Dependencies array for useEffect (when to recreate animations)
 * @param {Object} scope - Optional DOM element scope to limit GSAP context (default: null = global)
 * @returns {Object} GSAP context object for advanced manipulation (if needed)
 *
 * Benefits:
 * - Automatic cleanup prevents memory leaks
 * - Context scoping prevents animation conflicts
 * - React-friendly lifecycle management
 *
 * Usage:
 * useGSAP(() => {
 *   gsap.from(".my-element", { opacity: 0, y: 50, duration: 1 });
 * }, []);
 */
export const useGSAP = (animationFunction, dependencies = [], scope = null) => {
  // Reference to store the GSAP context for cleanup purposes
  const contextRef = useRef();

  // Effect runs when component mounts or dependencies change
  useEffect(() => {
    // Create GSAP context to scope animations and enable easy cleanup
    // Context ensures animations only affect elements within the specified scope
    const ctx = gsap.context(animationFunction, scope);
    // Store context reference for potential external access
    contextRef.current = ctx;

    // Cleanup function runs when component unmounts or dependencies change
    return () => {
      // Revert all animations created within this context
      // This automatically kills timelines, clears transforms, and restores original values
      ctx.revert();
    };
  }, dependencies); // Re-run effect when dependencies array changes

  // Return the GSAP context for advanced use cases (pausing, seeking, etc.)
  // Most common usage won't need to use the returned context
  return contextRef.current;
};

// Export as default for convenient importing
export default useGSAP;
