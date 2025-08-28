// React hooks for state management and lifecycle
import { useEffect, useState } from "react";
// React Router for navigation and location tracking
import { NavLink, useLocation } from "react-router-dom";
// Framer Motion for animations and scroll tracking
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * Header Component
 *
 * A scroll-triggered bottom navigation bar with animated pill indicator.
 * Appears when the user scrolls past 5% of the page and features a smooth
 * morphing background that follows the active link. Uses spring physics
 * for natural animations and includes proper accessibility attributes.
 */
const Header = () => {
  // Get current route location for active state detection
  const location = useLocation();
  // State to control header visibility based on scroll position
  const [isVisible, setIsVisible] = useState(false);
  // Track scroll progress as a value between 0 and 1
  const { scrollYProgress } = useScroll();

  // Listen for scroll changes and show/hide header accordingly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show the header when user has scrolled 5% of the page
    if (latest > 0.05) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  // Add bottom padding to body to prevent content overlap with fixed nav
  useEffect(() => {
    // Ensure iOS safe-area spacing doesn't hide the nav
    document.body.style.paddingBottom = "88px";

    // Cleanup function to remove padding when component unmounts
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, []); // Empty dependency array - run once on mount

  // Navigation links configuration
  const links = [
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // Animation variants for show/hide behavior
  const navVariants = {
    visible: { y: 0, opacity: 1 }, // Fully visible at normal position
    hidden: { y: 20, opacity: 0 }, // Hidden 20px below and invisible
  };

  return (
    // Fixed bottom navigation with scroll-triggered visibility
    <motion.nav
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
      variants={navVariants}
      animate={isVisible ? "visible" : "hidden"} // Show/hide based on scroll position
      transition={{ duration: 0.6, ease: "easeOut" }} // 600ms smooth animation
      aria-label="Primary" // Accessible label for screen readers
      role="navigation" // Semantic role for navigation
    >
      {/* Navigation container with glassmorphism effect */}
      <div className="relative rounded-full bg-gray-600/80 border-4 border-gray-500/80 shadow-xl backdrop-blur-sm">
        {/* Navigation list with minimal spacing */}
        <ul className="relative flex items-center gap-1 px-1 py-1">
          {/* Render navigation links dynamically */}
          {links.map(({ label, to }) => {
            // Determine if this link is currently active
            const isActive = location.pathname === to;

            return (
              <li key={to} className="relative">
                {/* Navigation link with accessibility attributes */}
                <NavLink
                  to={to}
                  className="relative block px-6 py-2 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-current={isActive ? "page" : undefined} // Accessibility for current page
                >
                  {/* Animated background pill for active state */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-hover-bg" // Shared layout ID for smooth morphing between links
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{
                        type: "spring", // Spring physics for natural movement
                        stiffness: 500, // High stiffness for snappy response
                        damping: 35, // Moderate damping to prevent oscillation
                      }}
                    />
                  )}

                  {/* Link text with dynamic color based on active state */}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-black" : "text-white"
                    }`} // Black text on white background when active, white text otherwise
                  >
                    {label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Header;
