// Import React hooks for managing side effects and element references
import { useEffect, useRef } from "react";
// Import GSAP animation library for creating animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin globally to enable scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom React hook for creating scroll-triggered animations with GSAP
 * Simplifies the creation and cleanup of ScrollTrigger instances
 *
 * @param {Object} options - ScrollTrigger configuration options (merged with defaults)
 * @param {Array} dependencies - Dependencies array for useEffect (when to recreate the trigger)
 * @returns {React.RefObject} elementRef - Ref to attach to the element you want to animate
 *
 * Usage:
 * const ref = useScrollTrigger({
 *   animation: gsap.from(ref.current, { opacity: 0, y: 50 }),
 *   start: "top 75%"
 * });
 * <div ref={ref}>Animated content</div>
 */
export const useScrollTrigger = (options = {}, dependencies = []) => {
  // Reference to the DOM element that will trigger the scroll animation
  const elementRef = useRef();
  // Reference to the ScrollTrigger instance for cleanup purposes
  const triggerRef = useRef();

  // Effect runs when component mounts or dependencies change
  useEffect(() => {
    // Get the current DOM element from the ref
    const element = elementRef.current;
    // Early return if element is not yet available (during initial render)
    if (!element) return;

    // Create ScrollTrigger instance with default configuration merged with custom options
    triggerRef.current = ScrollTrigger.create({
      trigger: element, // The element that triggers the scroll animation
      start: "top 80%", // Animation starts when element's top reaches 80% down the viewport
      end: "bottom 20%", // Animation ends when element's bottom reaches 20% down the viewport
      toggleActions: "play none none reverse", // play on enter, nothing on leave, nothing on enter back, reverse on leave back
      ...options, // Spread custom options to override defaults
    });

    // Cleanup function runs when component unmounts or dependencies change
    return () => {
      // Kill the ScrollTrigger instance to prevent memory leaks
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
    };
  }, dependencies); // Re-run effect when dependencies array changes

  // Return the element ref so components can attach it to DOM elements
  return elementRef;
};

// Export as default for convenient importing
export default useScrollTrigger;
