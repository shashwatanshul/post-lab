// Import React hook for managing side effects
import { useEffect } from "react";
// Import React Router hook to track location changes
import { useLocation } from "react-router-dom";

/**
 * Utility component that automatically scrolls to top when route changes
 * Integrates with both Lenis smooth scrolling and native browser scrolling
 *
 * @param {Object} props
 * @param {Object} props.lenis - Lenis smooth scrolling instance (optional)
 *
 * Usage: Place this component inside Router but outside Routes
 * <Router>
 *   <ScrollToTop lenis={lenisInstance} />
 *   <Routes>...</Routes>
 * </Router>
 */
const ScrollToTop = ({ lenis }) => {
  // Get current pathname from React Router to detect route changes
  const { pathname } = useLocation();

  // Effect runs whenever the route changes or lenis instance changes
  useEffect(() => {
    // Check if Lenis smooth scrolling instance is available
    if (lenis) {
      // Use Lenis for smooth scroll to top with immediate option
      // immediate: true disables animation for instant scroll on route change
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native browser scrolling if Lenis is not available
      // Scrolls to top-left corner (0, 0) instantly
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]); // Dependencies: re-run when route changes or lenis instance changes

  // This component doesn't render anything - it's purely for side effects
  return null;
};

// Export as default for use in App.jsx routing setup
export default ScrollToTop;
