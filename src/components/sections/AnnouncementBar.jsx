// Framer Motion for entrance animation
import { motion } from "framer-motion";

/**
 * AnnouncementBar Component
 *
 * A prominent announcement banner that appears at the top of the page.
 * Features a smooth fade-up animation for the text, while the background
 * remains static. Supports customizable messages and includes proper
 * accessibility attributes and semantic HTML.
 */
const AnnouncementBar = ({
  // Default message with hiring call-to-action, can be overridden via props
  message = "Help shape the future of digital journalism — we're hiring!",
}) => {
  return (
    // Semantic section with accessibility attributes and page anchor
    <section
      id="top" // Page anchor for scroll-to-top functionality
      className="announcement-bar" // Custom CSS class for styling
      role="region" // ARIA role for screen readers
      aria-label="Announcement" // Accessible label for the announcement section
    >
      {/* Full-width container */}
      <div className="w-full">
        {/* Static background container */}
        <div
          className="w-full flex items-center justify-center px-4 py-2 bg-black text-base text-white"
          style={{
            fontFamily: '"Inter Tight", Verdana, sans-serif', // Custom font stack
            fontSize: "16px", // Explicit font size
          }}
        >
          {/* Overflow wrapper to create a clean text reveal effect */}
          <div className="overflow-hidden">
            {/* Animated text content */}
            <motion.div
              initial={{ y: "100%" }} // Start below its container
              animate={{ y: "0%" }} // Animate to its normal position
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // 600ms smooth animation with a slight delay
            >
              {/* Display the announcement message */}
              {message}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementBar;
