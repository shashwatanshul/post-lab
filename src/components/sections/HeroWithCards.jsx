// React hooks for component lifecycle and DOM references
import { useEffect, useRef } from "react";
// Framer Motion for smooth animations and mouse tracking
import { motion, useMotionValue, useSpring } from "framer-motion";
// GSAP for complex scroll-triggered animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hero title words that animate in sequentially
const words = ["The", "Future", "of", "News", "Starts", "Here"];

// Feature cards data with icons and messaging
const cards = [
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
    text: "Empowering Creators.",
  },
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
    text: "Transforming Publishing.",
  },
  {
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
    text: "Reclaiming Canadian Media.",
  },
];

/**
 * HeroWithCards Component
 *
 * A complex hero section featuring:
 * - Animated title text with staggered word reveals
 * - Mouse-following yellow glow effect
 * - Scroll-triggered card animations (fanned out → grid layout)
 * - Header with logo and intro text
 * - Bouncing arrow animation
 *
 * Combines Framer Motion for entrance animations and mouse tracking
 * with GSAP for scroll-triggered card layout transformations.
 */
const HeroWithCards = () => {
  // Reference to the main container for mouse tracking
  const containerRef = useRef(null);

  // Motion values for the mouse-following glow effect
  const glowX = useMotionValue(0); // Raw X position
  const glowY = useMotionValue(0); // Raw Y position

  // Spring animations for smooth glow movement
  const springX = useSpring(glowX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springY = useSpring(glowY, { stiffness: 150, damping: 20, mass: 0.5 });

  // References for the scroll-triggered card animation
  const cardsContainerRef = useRef(null); // Container trigger
  const cardRefs = useRef([]); // Individual card elements
  cardRefs.current = []; // Reset refs array on each render

  // Helper function to collect card DOM references
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // Set up scroll-triggered card animation when component mounts
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create GSAP context for proper cleanup and scoping
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      if (cards.length < 3) return; // Need all 3 cards for the effect

      // Set up initial card states and layering
      gsap.set(cards, { opacity: 1 }); // Ensure cards are visible
      gsap.set(cards[1], { zIndex: 3 }); // Middle card on top
      gsap.set(cards[0], { zIndex: 2 }); // Left card middle layer
      gsap.set(cards[2], { zIndex: 1 }); // Right card bottom layer

      // Set initial "fanned out" state - cards overlap with rotation
      // This counteracts the CSS grid layout to create a stacked deck effect
      gsap.set(cards[0], { xPercent: 80, rotation: 8 }); // Left card: move right & rotate
      gsap.set(cards[2], { xPercent: -80, rotation: -8 }); // Right card: move left & rotate
      // Middle card stays in place (0,0) as the anchor point

      // Create scroll-triggered timeline for card spreading animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 65%", // Start when top of cards reaches 65% down viewport
          end: "center 50%", // End when center reaches 50% down viewport
          scrub: 1.2, // Tie animation to scroll with 1.2s lag for smoothness
        },
      });

      // Animate cards TO their final grid positions (spread out)
      tl.to(cards[0], { xPercent: 0, rotation: 0 }) // Left card returns to grid position
        .to(cards[2], { xPercent: 0, rotation: 0 }, "<"); // Right card returns simultaneously
      // The "<" means start this animation at the same time as the previous one
    }, cardsContainerRef);

    // Cleanup function to prevent memory leaks
    return () => ctx.revert();
  }, []); // Empty dependency array - run once on mount

  // Handle mouse movement for the floating glow effect
  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return; // Guard clause if ref not yet attached

    // Get element's position relative to viewport
    const rect = el.getBoundingClientRect();
    // Calculate mouse position relative to element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const r = 600; // Half the glow size (1200px diameter / 2)
    // Position glow so its center follows the mouse
    glowX.set(x - r); // Offset by radius to center the glow
    glowY.set(y - r);
  };

  return (
    // Main container with mouse tracking for glow effect
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
      style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }}
    >
      {/* Mouse-following yellow glow effect */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          top: 0,
          left: 0,
          width: 1500, // Large glow size for dramatic effect
          height: 1500,
          x: springX, // Smooth spring-animated X position
          y: springY, // Smooth spring-animated Y position
          background:
            "radial-gradient(closest-side, rgba(255,245,100,1), rgba(255,245,100,0.5), rgba(255,245,100,0))",
          filter: "blur(30px)", // Heavy blur for soft glow
          zIndex: -1, // Behind all content
        }}
      />

      {/* Background decorative grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns for visual structure */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Header section with logo and intro text */}
      <header className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6 pl-4 md:pl-8 pr-4 md:pr-8 relative z-10">
          {/* Logo section */}
          <div className="py-6">
            <motion.p
              initial={{ y: 16, opacity: 0 }} // Start slightly below and hidden
              animate={{ y: 0, opacity: 1 }} // Animate to normal position and visible
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Smooth 600ms animation with delay
              className="text-[14px] md:text-[16px] leading-6 text-black"
            >
              <a href="/about" aria-label="Post Labs" className="inline-block">
                <img
                  src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg"
                  alt="Post Labs logo"
                  className="h-4 md:h-5 w-auto"
                />
              </a>
            </motion.p>
          </div>

          {/* Intro text with entrance animation */}
          <div className="py-6 md:ml-auto md:text-left max-w-[395px]">
            <motion.p
              initial={{ y: 16, opacity: 0 }} // Start slightly below and hidden
              animate={{ y: 0, opacity: 1 }} // Animate to normal position and visible
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Smooth 600ms animation with delay
              className="text-[14px] md:text-[16px] leading-6 text-black"
            >
              We're building the backbone of Canadian digital media — a next-gen
              platform that gives creators the tools to thrive.
            </motion.p>
          </div>
        </div>
      </header>

      {/* Hero title section with large animated text and bouncing arrow */}
      <section className="w-full pt-[160px]">
        <div className="pl-4 md:pl-8 pr-4 md:pr-8 pb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Main title with staggered word animation */}
            <div className="md:col-span-2">
              {/* Screen reader accessible title */}
              <h1 className="sr-only">The Future of News Starts Here</h1>

              {/* Visual title with individual animated words */}
              <div
                aria-hidden="true"
                className="text-black font-normal tracking-tight leading-[0.95] select-none"
              >
                {words.map((w, i) => (
                  <motion.span
                    key={w + i}
                    initial={{ y: 24, opacity: 0 }} // Start below and hidden
                    animate={{ y: 0, opacity: 1 }} // Animate to normal position
                    transition={{
                      duration: 0.6, // 600ms animation duration
                      ease: "easeOut", // Smooth deceleration
                      delay: 0.15 * i, // Stagger each word by 150ms
                    }}
                    className="inline-block text-[10vw] md:text-[7vw] mr-4 align-top"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated down arrow */}
            <div className="md:col-span-1 flex justify-end">
              <motion.img
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
                alt="Down arrow"
                className="h-24 md:h-40"
                initial={{ y: 0 }} // Start at normal position
                animate={{ y: [0, -10, 0] }} // Bounce up 10px and back down
                transition={{
                  duration: 2, // 2 second bounce cycle
                  repeat: Infinity, // Loop forever
                  repeatType: "loop", // Restart from beginning each cycle
                  ease: "easeInOut", // Smooth acceleration/deceleration
                }}
                style={{
                  willChange: "transform", // Optimize for animations
                  backfaceVisibility: "hidden", // Prevent flickering
                  opacity: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards with scroll-triggered animation */}
      <section ref={cardsContainerRef} className="w-full pt-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Render each feature card with scroll animation */}
            {cards.map((c, i) => (
              <motion.div
                key={c.text}
                ref={addToRefs} // Add to refs array for GSAP animation targeting
                className="relative rounded-[36px] bg-black text-white min-h-[440px] p-8 flex flex-col justify-end"
                style={{ fontFamily: '"Inter Tight", Verdana, sans-serif' }}
              >
                {/* Icon positioned in top-left corner */}
                <div className="absolute top-0 left-0 p-6">
                  <img src={c.icon} alt="" className="h-10 w-10" />
                </div>

                {/* Card text positioned at bottom */}
                <div className="text-[28px] md:text-[32px] leading-tight">
                  {c.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroWithCards;
