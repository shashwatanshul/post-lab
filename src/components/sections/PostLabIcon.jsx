// Import React hooks for managing side effects and DOM references
import { useEffect, useRef } from "react";
// Import Framer Motion for mouse-tracking animations and motion values
import { motion, useMotionValue, useSpring } from "framer-motion";
// Import GSAP animation library for scroll-driven card animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Array of words for animated text display (currently unused but preserved for future use)
const words = ["The", "Future", "of", "News", "Starts", "Here"];

// Card data configuration - three feature cards with icons and messaging
const cards = [
  {
    // Card 1: Creator empowerment focus
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
    text: "Empowering Creators.",
  },
  {
    // Card 2: Publishing transformation focus
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
    text: "Transforming Publishing.",
  },
  {
    // Card 3: Canadian media focus
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
    text: "Reclaiming Canadian Media.",
  },
];

/**
 * PostLabIcon component - company header with logo, intro text, and interactive elements
 * Features mouse-tracking glow effects and scroll-triggered card animations
 *
 * This component serves as the main header/hero section introducing Post Labs
 * Combines company branding with value proposition messaging
 *
 * Layout: Two-column responsive grid with logo and descriptive text
 * Interactions: Mouse-tracking glow effects for enhanced visual appeal
 * Note: Card animation code is present but cards are not currently rendered
 */
const PostLabIcon = () => {
  // Reference to the main container for mouse tracking
  const containerRef = useRef(null);

  // Motion values for glow effect position tracking
  const glowX = useMotionValue(0); // X position of mouse-following glow
  const glowY = useMotionValue(0); // Y position of mouse-following glow

  // Spring animations for smooth glow movement
  const springX = useSpring(glowX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(glowY, { stiffness: 150, damping: 20, mass: 0.5 });

  // References for card animation system (cards not currently rendered)
  const cardsContainerRef = useRef(null); // Container for card animations
  const cardRefs = useRef([]); // Array of individual card references
  cardRefs.current = []; // Reset refs array

  // Helper function to collect card references for GSAP animations
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // Effect runs on component mount to set up card animations (if cards were rendered)
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP context for automatic cleanup and scoping
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      // Early return if not enough cards are available
      if (cards.length < 3) return;

      // Initial card setup: visibility and layering
      gsap.set(cards, { opacity: 1 }); // Make all cards visible
      gsap.set(cards[1], { zIndex: 3 }); // Middle card on top (highest priority)
      gsap.set(cards[0], { zIndex: 2 }); // Left card in middle layer
      gsap.set(cards[2], { zIndex: 1 }); // Right card at bottom layer

      // Set initial "fanned out" state - cards overlap and rotate
      // Translate horizontally to counteract grid layout and create overlap effect
      gsap.set(cards[0], { xPercent: 80, rotation: 8 }); // Left card: move right, rotate clockwise
      gsap.set(cards[2], { xPercent: -80, rotation: -8 }); // Right card: move left, rotate counter-clockwise

      // Create scroll-triggered timeline for card animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current, // Element that triggers the animation
          start: "top 65%", // Animation starts when cards reach 65% down viewport
          end: "center 50%", // Animation ends when cards center reaches 50% down viewport
          scrub: 1.2, // Smooth scrubbing with slight lag (1.2s delay)
        },
      });

      // Animate TO the final grid positions (straightened and aligned)
      tl.to(cards[0], { xPercent: 0, rotation: 0 }) // Left card: return to grid position
        .to(cards[2], { xPercent: 0, rotation: 0 }, "<"); // Right card: return to grid position (same time)
    }, cardsContainerRef); // Scope the GSAP context to the cards container

    // Cleanup function runs when component unmounts
    return () => ctx.revert(); // Revert all GSAP animations and kill ScrollTriggers
  }, []); // Empty dependency array - runs once on mount

  // Mouse move handler for glow effect tracking
  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return; // Early return if container ref is not available

    // Get element boundaries for coordinate calculation
    const rect = el.getBoundingClientRect();
    // Calculate mouse position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = 450; // Glow radius: 450px (total glow diameter: 900px)

    // Update motion values for glow position (offset by radius for centering)
    glowX.set(x - r); // Center glow horizontally on mouse
    glowY.set(y - r); // Center glow vertically on mouse
  };

  return (
    // Main container with mouse tracking for glow effects
    <div
      ref={containerRef} // Reference for mouse tracking and glow positioning
      onMouseMove={handleMouseMove} // Mouse move handler for glow effect
      className="relative overflow-hidden" // Relative positioning with hidden overflow
      style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }} // Custom font family
    >
      {/* Background decorative grid - positioned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating grid container with max width and center alignment */}
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns - creates subtle vertical line pattern */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Header section containing logo and company introduction */}
      <header className="w-full">
        {/* Two-column responsive grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6 pl-4 md:pl-8 pr-4 md:pr-8 relative z-10">
          {/* Left column: Company logo */}
          <div className="py-6">
            <motion.p
              initial={{ y: 16, opacity: 0 }} // Start 16px below and invisible
              animate={{ y: 0, opacity: 1 }} // Move to position and fade in
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Smooth entrance with delay
              className="text-[14px] md:text-[16px] leading-6 text-black" // Responsive typography
            >
              <a href="/about" aria-label="Post Labs" className="inline-block">
                <img
                  src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg"
                  alt="Post Labs logo" // Accessible alt text for screen readers
                  className="h-4 md:h-5 w-auto" // Responsive logo sizing
                />
              </a>
            </motion.p>
          </div>

          {/* Right column: Company description with animation */}
          <div className="py-6 md:ml-auto md:text-left max-w-[395px]">
            <motion.p
              initial={{ y: 16, opacity: 0 }} // Start 16px below and invisible
              animate={{ y: 0, opacity: 1 }} // Move to position and fade in
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Smooth entrance with delay
              className="text-[14px] md:text-[16px] leading-6 text-black" // Responsive typography
            >
              We're building the backbone of Canadian digital media — a next-gen
              platform that gives creators the tools to thrive.
            </motion.p>
          </div>
        </div>
      </header>
    </div>
  );
};

// Export as default for use in page layouts (About, Contact, PrivacyPolicy)
export default PostLabIcon;
