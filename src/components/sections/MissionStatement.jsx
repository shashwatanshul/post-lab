// React hooks for component lifecycle and DOM references
import { useEffect, useRef } from "react";
// GSAP animation library for smooth, performant animations
import { gsap } from "gsap";
// ScrollTrigger plugin for scroll-based animations
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * MissionStatement Component
 *
 * Displays Post Labs' mission statement with an animated text reveal effect.
 * Each word fades in sequentially as the user scrolls, creating an engaging
 * reading experience that emphasizes the company's core message.
 */
const MissionStatement = () => {
  // The mission statement text content
  const text =
    "Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted – built for Canadians, by Canadians.";

  // Split text into individual words for granular animation control
  const words = text.split(" ");

  // Reference to the container element for GSAP targeting
  const containerRef = useRef(null);

  // Set up scroll-triggered animation when component mounts
  useEffect(() => {
    // Get all word elements for animation targeting
    const wordsInP = containerRef.current.querySelectorAll("span.word");

    // Create GSAP context for proper cleanup and scoping
    const ctx = gsap.context(() => {
      // Animate words to full opacity with scroll-based timing
      gsap.to(wordsInP, {
        opacity: 1, // Fade from initial 0.15 to full opacity
        stagger: 0.05, // Delay each word by 50ms for sequential reveal
        ease: "power2.inOut", // Smooth easing for natural motion
        scrollTrigger: {
          trigger: containerRef.current, // Element that triggers the animation
          start: "top 80%", // Start when top of element reaches 80% down the viewport
          end: "bottom 80%", // End when bottom of element reaches 80% down the viewport
          scrub: 1.5, // Tie animation progress to scroll position with 1.5s lag
        },
      });
    }, containerRef);

    // Cleanup function to prevent memory leaks
    return () => ctx.revert();
  }, []); // Empty dependency array - run once on mount

  return (
    // Main section container with vertical padding and white background
    <section className="relative overflow-hidden pt-[120px] pb-[150px] bg-white">
      {/* Background decorative grid - positioned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns for visual decoration */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Content container - positioned above background grid */}
      <div className="relative z-10 max-w-4xl mx-auto px-[30px]">
        {/* Mission statement text with scroll-triggered animation */}
        <p
          ref={containerRef}
          className="text-3xl md:text-5xl font-medium leading-snug text-center text-gray-900"
        >
          {/* Render each word as an individual span for granular animation control */}
          {words.map((word, index) => (
            <span
              key={index}
              className="word inline-block"
              style={{
                opacity: 0.15, // Initial low opacity - will animate to 1
                marginRight: "0.25em", // Spacing between words
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
