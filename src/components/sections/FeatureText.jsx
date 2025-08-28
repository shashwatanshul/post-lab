// Framer Motion for scroll-triggered word animations
import { motion } from "framer-motion";

// Feature content data with text, icons, and alignment configuration
const features = [
  {
    text: "Post Labs is building a homegrown platform designed for Canadians and the future of Canadian media.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg",
    align: "left", // Text block aligned to left side
  },
  {
    text: "At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267094af8c90b6a17e323a_icon-2-transparent.svg",
    align: "right", // Text block aligned to right side for visual variety
  },
  {
    text: "Built by Canadians, for Canadians, PostOS is more than just technology — it's a way to bring our stories home.",
    icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg",
    align: "left", // Back to left alignment
  },
];

/**
 * AnimatedWords Component
 *
 * Creates a scroll-triggered word-by-word animation effect.
 * When the text comes into view, each word animates in sequentially
 * from below with a slight stagger, creating a smooth reading flow.
 */
const AnimatedWords = ({ text }) => {
  // Split text into individual words for granular animation control
  const words = text.split(" ");

  // Container animation variants - controls overall opacity and stagger timing
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: {
      opacity: 1, // Final state: fully visible
      transition: {
        staggerChildren: 0.03, // Delay each word by 30ms for rapid sequence
      },
    },
  };

  // Individual word animation variants - controls movement and fade-in
  const wordVariants = {
    hidden: { y: 20, opacity: 0 }, // Start 20px below and invisible
    visible: {
      y: 0, // End at normal position
      opacity: 1, // End fully visible
      transition: {
        duration: 0.5, // 500ms animation duration
        ease: "easeOut", // Smooth deceleration
      },
    },
  };

  return (
    <motion.p
      className="relative z-10 text-xl md:text-2xl leading-relaxed"
      variants={containerVariants}
      initial="hidden" // Start with hidden state
      whileInView="visible" // Animate to visible when scrolled into view
      viewport={{ once: true, margin: "-100px" }} // Trigger once, 100px before entering viewport
    >
      {/* Render each word as an individually animated span */}
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants} // Use word-specific animation
          className="inline-block" // Block display for transform effects
          style={{ marginRight: "0.25em" }} // Spacing between words
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

/**
 * FeatureText Component
 *
 * Displays a series of feature descriptions with alternating left/right alignment.
 * Each feature block includes an icon and animated text that reveals word-by-word
 * when scrolled into view. Creates a dynamic, engaging reading experience that
 * emphasizes Post Labs' key messaging about their Canadian media platform.
 */
const FeatureText = () => {
  return (
    // Main section container with generous vertical padding
    <section className="relative bg-white py-24 md:py-32">
      {/* Background decorative grid - positioned behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns for visual structure */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>

      {/* Content container with large spacing between features */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 space-y-32">
        {/* Render each feature with alternating alignment */}
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start ${
              feature.align === "right" ? "justify-end" : "justify-start"
            }`} // Dynamic alignment based on feature configuration
          >
            {/* Feature content block with icon and text */}
            <div className="relative max-w-2xl">
              {/* Decorative icon positioned behind and above text */}
              <img
                src={feature.icon}
                alt="" // Decorative image, no alt text needed
                className="absolute -top-8 -left-12 w-24 h-24 opacity-50 z-0"
              />

              {/* Animated text content */}
              <AnimatedWords text={feature.text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureText;
