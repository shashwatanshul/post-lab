// Import Framer Motion for staggered text animations and smooth entrance effects
import { motion } from "framer-motion";

/**
 * Privacy_policy component - displays animated page title for privacy policy page
 * Features staggered word animation with decorative grid background
 *
 * This component serves as the page header for the privacy policy page
 * Uses Framer Motion for sophisticated text animation with word-by-word reveal
 * Different from WhatWeAreBuilding as it uses immediate animation (not scroll-triggered)
 *
 * Layout: Large left-aligned title with background grid overlay
 * Animation: Staggered word entrance with opacity and y-axis movement on page load
 */
const Privacy_policy = () => {
  // Page title text content
  const title = "Privacy Policy";
  // Split title into individual words for staggered animation
  const words = title.split(" ");

  // Animation variants for the container - controls overall title appearance
  const containerVariants = {
    hidden: { opacity: 0 }, // Start invisible
    visible: {
      opacity: 1, // Fade in to full opacity
      transition: {
        staggerChildren: 0.1, // Delay each word animation by 0.1s for staggered effect
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
          <div className="floating-grid-col last"></div> {/* Last column */}
        </div>
      </div>
      {/* Main content area positioned above background grid */}
      <div className="relative z-10 max-w-[1400px] pl-4 md:pl-8">
        {/* Animated main heading with staggered word animation */}
        <motion.h1
          className="text-8xl md:text-9xl font-medium tracking-tight text-black"
          variants={containerVariants} // Uses container animation variants
          initial="hidden" // Start in hidden state
          animate="visible" // Immediately animate to visible (no scroll trigger)
        >
          {/* Map through each word to create individual animated spans */}
          {words.map((word, index) => (
            <motion.span
              key={index} // Unique key for each word
              variants={wordVariants} // Individual word animation
              className="inline-block mr-4" // Inline-block for proper animation + spacing
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

// Export as default for use in PrivacyPolicy page layout
export default Privacy_policy;
