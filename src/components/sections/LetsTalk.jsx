// Framer Motion for smooth, declarative animations
import { motion } from "framer-motion";

/**
 * LetsTalk Component
 *
 * Displays a large, animated "Let's Talk" heading with staggered word animations.
 * Each word animates in from below with a slight delay, creating an engaging
 * entrance effect that draws attention to this call-to-action section.
 */
const LetsTalk = () => {
  // The main heading text
  const title = "Let's Talk";
  // Split into individual words for staggered animation
  const words = title.split(" ");

  // Animation variants for the container - controls overall opacity and stagger timing
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: {
      opacity: 1, // Final state: fully visible
      transition: {
        staggerChildren: 0.1, // Delay each child animation by 100ms
      },
    },
  };

  // Animation variants for individual words - controls movement and fade-in
  const wordVariants = {
    hidden: { y: 30, opacity: 0 }, // Start 30px below and invisible
    visible: {
      y: 0, // End at normal position
      opacity: 1, // End fully visible
      transition: {
        duration: 0.8, // Animation takes 800ms
        ease: "easeOut", // Smooth deceleration curve
      },
    },
  };

  return (
    // Main section with generous vertical padding
    <section className="relative bg-white py-24 md:py-32">
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
      <div className="relative z-10 max-w-[1400px] pl-4 md:pl-8">
        {/* Animated heading with container-level animation control */}
        <motion.h1
          className="text-8xl md:text-9xl font-medium tracking-tight text-black"
          variants={containerVariants}
          initial="hidden" // Start with hidden state
          animate="visible" // Animate to visible state on mount
        >
          {/* Render each word as an animated span for staggered effect */}
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants} // Use word-specific animation
              className="inline-block mr-4" // Block display for transform + right margin
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default LetsTalk;
