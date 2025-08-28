// Framer Motion for advanced scroll-triggered animations with spring physics
import { motion } from "framer-motion";

/**
 * AnimatedText Component
 *
 * Creates sophisticated word-by-word text animations with customizable delays.
 * Each word animates in from below with spring physics, creating a natural
 * bouncy effect. Supports custom delay multipliers for staggered reveals
 * across multiple text blocks.
 */
const AnimatedText = ({ text }) => {
  // Split text into individual words for granular animation control
  const words = text.split(" ");

  // Container animation variants with customizable delay multiplier
  const container = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: (i = 1) => ({
      opacity: 1, // Final state: fully visible
      transition: {
        staggerChildren: 0.03, // 30ms delay between each word
        delayChildren: 0.04 * i, // Custom delay based on text block order
      },
    }),
  };

  // Individual word animation variants with spring physics
  const child = {
    visible: {
      opacity: 1, // End fully visible
      y: 0, // End at normal position
      transition: {
        type: "spring", // Spring physics for natural bounce
        damping: 12, // Controls bounce dampening
        stiffness: 100, // Controls spring tension
      },
    },
    hidden: {
      opacity: 0, // Start invisible
      y: 20, // Start 20px below normal position
      transition: {
        type: "spring", // Consistent spring physics
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      className="text-base text-gray-700 leading-relaxed"
      variants={container}
      initial="hidden" // Start with hidden state
      whileInView="visible" // Animate when 80% of text is in view
      viewport={{ once: true, amount: 0.8 }} // Trigger once at 80% visibility
    >
      {/* Render each word as an individually animated span */}
      {words.map((word, index) => (
        <motion.span
          variants={child} // Use spring animation for each word
          style={{ display: "inline-block", paddingRight: "0.25em" }} // Block display for transforms + spacing
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

/**
 * ContactCta Component
 *
 * Call-to-action section targeting two key audiences: investors and builders.
 * Features staggered animations with offset timing to create visual hierarchy.
 * The right column (builders) is offset vertically on desktop for dynamic layout.
 * Includes a subtle yellow gradient background for visual warmth.
 */
const ContactCta = () => {
  // Content text for investor call-to-action
  const investorsText =
    "We're raising capital to scale fast. If you're an investor who believes in the future of independent Canadian media, we'd love to speak with you.";

  // Content text for careers/builders call-to-action
  const buildersText =
    "We're hiring. If you're passionate about media, technology, and the future of Canada's digital ecosystem, come build with us. We're always looking for great people. Check out our jobs page for current opportunities.";

  // Simple fade-up animation variants for headings and links
  const fadeUp = {
    hidden: { y: 20, opacity: 0 }, // Start 20px below and hidden
    visible: {
      y: 0, // End at normal position
      opacity: 1, // End fully visible
      transition: { duration: 0.6, ease: "easeOut" }, // 600ms smooth animation
    },
  };

  return (
    // Main section with extended bottom padding and overflow hidden for gradient effect
    <section className="relative bg-white pt-24 pb-48 overflow-hidden">
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

      {/* Content container - positioned above background elements */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Two-column layout with different gap sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {/* Left column: Investor call-to-action */}
          <div className="space-y-6 max-w-md">
            {/* Investor heading with large typography */}
            <motion.h2
              className="text-5xl md:text-6xl font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }} // Trigger at 80% visibility
              variants={fadeUp}
            >
              For Investors
            </motion.h2>

            {/* Animated investor description text */}
            <AnimatedText text={investorsText} />

            {/* Investor contact email link */}
            <motion.a
              href="mailto:invest@postlabs.com"
              className="text-lg font-medium text-black underline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              invest@postlabs.com
            </motion.a>
          </div>

          {/* Right column: Builders/careers call-to-action with vertical offset */}
          <div className="space-y-6 md:mt-48 max-w-md">
            {" "}
            {/* 192px top margin on desktop for staggered layout */}
            {/* Builders heading with large typography */}
            <motion.h2
              className="text-5xl md:text-6xl font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              For Builders
            </motion.h2>
            {/* Animated builders description text */}
            <AnimatedText text={buildersText} />
            {/* Careers contact email link */}
            <motion.a
              href="mailto:careers@postlabs.com"
              className="text-lg font-medium text-black underline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUp}
            >
              careers@postlabs.com
            </motion.a>
          </div>
        </div>
      </div>

      {/* Subtle yellow gradient background at bottom for visual warmth */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-yellow-200 via-yellow-100 to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};

export default ContactCta;
