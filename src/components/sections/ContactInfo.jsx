// React hooks for component lifecycle and DOM references
import { useEffect, useRef } from "react";
// Framer Motion for scroll-triggered word animations
import { motion } from "framer-motion";
// GSAP for advanced scroll effects (text pinning)
import { gsap } from "gsap";
// ScrollTrigger plugin for scroll-based animations and pinning
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedText Component
 *
 * Creates a scroll-triggered word-by-word animation with spring physics.
 * When text enters the viewport, each word animates in from below with
 * a slight stagger and bouncy spring effect for engaging readability.
 */
const AnimatedText = ({ text }) => {
  // Split text into individual words for granular animation control
  const words = text.split(" ");

  // Container animation variants - controls overall opacity and stagger timing
  const container = {
    hidden: { opacity: 0 }, // Initial state: invisible
    visible: {
      opacity: 1, // Final state: fully visible
      transition: { staggerChildren: 0.03 }, // 30ms delay between each word
    },
  };

  // Individual word animation variants with spring physics
  const child = {
    hidden: { y: 20, opacity: 0 }, // Start 20px below and invisible
    visible: {
      y: 0, // End at normal position
      opacity: 1, // End fully visible
      transition: { type: "spring", damping: 12, stiffness: 100 }, // Bouncy spring animation
    },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden" // Start with hidden state
      whileInView="visible" // Animate when 80% of element is in view
      viewport={{ once: true, amount: 0.8 }} // Trigger once when 80% visible
    >
      {/* Render each word as an individually animated span */}
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child} // Use spring animation for each word
          style={{ display: "inline-block", paddingRight: "0.25em" }} // Block display for transforms + spacing
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

/**
 * ContactInfo Component
 *
 * Displays contact information with a sophisticated pinned text effect on desktop.
 * The left column heading stays fixed in position while the right column content
 * scrolls, creating an engaging reading experience. Includes animated text
 * reveals and contact information for different inquiry types.
 */
const ContactInfo = () => {
  // Reference to the text element that gets pinned on desktop
  const pinnedTextRef = useRef(null);
  // Reference to the section for scroll trigger boundaries
  const sectionRef = useRef(null);

  // Set up responsive text pinning effect when component mounts
  useEffect(() => {
    // Create GSAP context for proper cleanup and scoping
    const ctx = gsap.context(() => {
      // Use media queries to apply pinning only on appropriate screen sizes
      ScrollTrigger.matchMedia({
        // Apply pinning only on screens wider than 768px (desktop)
        "(min-width: 768px)": function () {
          ScrollTrigger.create({
            trigger: pinnedTextRef.current, // Element to pin
            start: "top 20%", // Start pinning when element reaches 20% from top
            endTrigger: sectionRef.current, // Use section as end boundary
            end: "bottom 80%", // Stop pinning when section bottom reaches 80% from top
            pin: true, // Enable pinning behavior
          });
        },
      });
    }, sectionRef);

    // Cleanup function to prevent memory leaks
    return () => ctx.revert();
  }, []); // Empty dependency array - run once on mount

  // Main descriptive text with contact instructions
  const mainText =
    "Whether you're interested in investing, joining the team, or just have a question, we're here to help. Use the form below to send us a message — you'll be able to choose where to direct your note, and someone from our team will get back to you.";

  return (
    // Main section container with generous vertical padding
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32">
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

      {/* Content container - positioned above background grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Two-column layout: pinned heading + scrolling content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column: Pinned heading (desktop only) */}
          <div className="pt-2">
            <h2
              ref={pinnedTextRef} // Reference for GSAP pinning effect
              className="text-3xl font-medium text-gray-800"
            >
              We'd love to hear from you.
            </h2>
          </div>

          {/* Right column: Scrolling content with contact information */}
          <div className="space-y-12">
            {/* Main descriptive text with animated word reveals */}
            <div className="text-xl md:text-2xl leading-relaxed">
              <AnimatedText text={mainText} />
            </div>

            {/* Contact information organized by inquiry type */}
            <div className="space-y-8 text-sm text-gray-600">
              {/* Investor contact information */}
              <div>
                <p className="font-semibold">For investor enquiries:</p>
                <a href="mailto:invest@postlabs.com" className="underline">
                  invest@postlabs.com
                </a>
              </div>

              {/* Career contact information */}
              <div>
                <p className="font-semibold">
                  For careers and job applications:
                </p>
                <a href="mailto:careers@postlabs.com" className="underline">
                  careers@postlabs.com
                </a>
              </div>

              {/* General contact information */}
              <div>
                <p className="font-semibold">For everything else:</p>
                <p>
                  Use the contact form below, and select the category that best
                  fits your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
