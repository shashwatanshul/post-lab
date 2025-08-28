// Import Framer Motion for staggered text animations and scroll-triggered effects
import { motion } from "framer-motion";

/**
 * WhatWeAreBuilding section component - displays animated title with decorative grid background
 * Features staggered word animation on scroll and subtle background grid pattern
 *
 * This component serves as a section header, likely introducing product/service information
 * Uses Framer Motion for sophisticated text animation with word-by-word reveal
 *
 * Layout: Large centered title with background grid overlay
 * Animation: Staggered word entrance with opacity and y-axis movement
 */
const WhatWeAreBuilding = () => {
  // Section title text content
  const title = "What We're Building";
  // Split title into individual words for staggered animation
  const words = title.split(" ");

  // Animation variants for the container - controls overall section appearance
  const containerVariants = {
    hidden: { opacity: 0 }, // Start invisible
    visible: {
      opacity: 1, // Fade in to full opacity
      transition: {
        staggerChildren: 0.1, // Delay each child animation by 0.1s for staggered effect
      },
    },
  };

  // Animation variants for individual words - creates smooth entrance effect
  const wordVariants = {
    hidden: { y: 30, opacity: 0 }, // Start 30px below and invisible
    visible: {
      y: 0, // Move to original position
      opacity: 1, // Fade in to full opacity
      transition: {
        duration: 0.8, // Animation takes 0.8 seconds
        ease: "easeOut", // Smooth deceleration for natural feel
      },
    },
  };

  return (
    // Main section container with relative positioning for layered content
    <section className="relative bg-white py-24 md:py-32">
      {/* Background decorative grid - positioned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating grid container with max width and center alignment */}
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns - creates subtle vertical line pattern */}
          <div className="floating-grid-col first"></div>{" "}
          {/* First column with left border */}
          <div className="floating-grid-col"></div> {/* Middle columns */}
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>{" "}
          {/* Last column (if styled differently) */}
        </div>
      </div>
      {/* Main content area positioned above background grid */}
      <div className="relative z-10 max-w-[1400px] px-4 md:px-8">
        {/* Animated main heading with staggered word animation */}
        <motion.h1
          className="text-6xl md:text-8xl font-medium tracking-tight text-black"
          variants={containerVariants} // Uses container animation variants
          initial="hidden" // Start in hidden state
          whileInView="visible" // Trigger animation when element comes into view
          viewport={{ once: true, margin: "-100px" }} // Only animate once, trigger 100px before entering viewport
        >
          {/* First word: "What" - with right margin for spacing */}
          <motion.span variants={wordVariants} className="inline-block mr-4">
            {words[0]} {/* "What" */}
          </motion.span>
          {/* Second word: "We're" - on same line */}
          <motion.span variants={wordVariants} className="inline-block">
            {words[1]} {/* "We're" */}
          </motion.span>
          {/* Line break for visual layout */}
          <br />
          {/* Third word: "Building" - on new line */}
          <motion.span variants={wordVariants} className="inline-block">
            {words[2]} {/* "Building" */}
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

// Export as default for use in About page layout
export default WhatWeAreBuilding;
