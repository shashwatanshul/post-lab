// Framer Motion for page transition animations
import { motion } from "framer-motion";
// Layout components for consistent site structure
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout Component
 *
 * A wrapper component that provides the main structure for all pages.
 * Features a sticky header, animated main content area, and footer.
 * Uses flexbox to ensure the footer stays at the bottom of the viewport
 * even on short pages. Includes smooth fade-in animations for page transitions.
 */
const Layout = ({ children }) => {
  return (
    // Full-height container with flexbox layout
    <div className="min-h-screen flex flex-col">
      {/* Site header - remains consistent across all pages */}
      <Header />

      {/* Main content area with fade-in animation */}
      <motion.main
        className="flex-1" // Expands to fill available space, pushing footer to bottom
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in to full visibility
        transition={{ duration: 0.5 }} // 500ms smooth fade transition
      >
        {/* Render page-specific content passed as children */}
        {children}
      </motion.main>

      {/* Site footer - remains consistent across all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
