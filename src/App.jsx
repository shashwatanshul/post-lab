// Import BrowserRouter (aliased as Router) for client-side routing functionality
// Import Routes component to define the routing structure
// Import Route component to create individual route mappings
// Import Navigate component for programmatic navigation and redirects
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import useEffect hook for side effects and component lifecycle management
// Import useState hook for managing local component state
import { useEffect, useState } from "react";

// Import Lenis library for smooth scrolling animations
import Lenis from "lenis";

// Import Layout component that provides consistent page structure and navigation
import Layout from "./components/layout/Layout";

// Import About page component
import About from "./pages/About";

// Import Contact page component
import Contact from "./pages/Contact";

// Import Privacy Policy page component
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Import ScrollToTop utility component for handling scroll behavior on route changes
import ScrollToTop from "./components/utils/ScrollToTop";

// Import App-specific CSS styles
import "./App.css";

// Main App functional component that serves as the root of the application
function App() {
  // State to store the Lenis smooth scrolling instance, initially null
  const [lenis, setLenis] = useState(null);

  // Initialize Lenis for smooth scrolling
  // useEffect hook runs after component mounts to set up smooth scrolling functionality
  useEffect(() => {
    // Create new Lenis instance with custom configuration options
    const lenisInstance = new Lenis({
      // Animation duration for scroll transitions (1.2 seconds)
      duration: 1.2,
      // Custom easing function using exponential decay for natural motion feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Restrict scrolling to vertical direction only
      direction: "vertical",
      // Set touch gesture direction to vertical only
      gestureDirection: "vertical",
      // Enable smooth scrolling animations
      smooth: true,
      // Mouse wheel scroll sensitivity multiplier (1 = default)
      mouseMultiplier: 1,
      // Disable smooth scrolling on touch devices for better performance
      smoothTouch: false,
      // Touch scroll sensitivity multiplier for mobile devices
      touchMultiplier: 2,
      // Disable infinite scrolling behavior
      infinite: false,
    });

    // Store the Lenis instance in component state for access by other components
    setLenis(lenisInstance);

    // Recursive animation frame function to continuously update Lenis
    function raf(time) {
      // Update Lenis with current timestamp for smooth animation calculations
      lenisInstance.raf(time);
      // Schedule next animation frame to maintain smooth scrolling
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop for continuous Lenis updates
    requestAnimationFrame(raf);

    // Cleanup function that executes when component unmounts
    return () => {
      // Destroy Lenis instance to prevent memory leaks
      lenisInstance.destroy();
      // Reset Lenis state to null
      setLenis(null);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Return JSX structure for the entire application
  return (
    // BrowserRouter provides routing context for the entire application
    <Router>
      {/* ScrollToTop component manages scroll position when navigating between routes */}
      <ScrollToTop lenis={lenis} />
      {/* Main application container with CSS class for styling */}
      <div className="App">
        {/* Layout component wraps all pages with consistent header/footer/navigation */}
        <Layout>
          {/* Routes component defines all available routes in the application */}
          <Routes>
            {/* Redirect root to /about since it's the landing page */}
            {/* Root route that automatically redirects to About page */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            {/* About page route - main landing page of the application */}
            <Route path="/about" element={<About />} />
            {/* Contact page route - contains contact form and information */}
            <Route path="/contact" element={<Contact />} />
            {/* Privacy Policy page route - legal/compliance page */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Fallback route */}
            {/* Catch-all route for invalid URLs that redirects to About page */}
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

// Export App component as default export for use in main.jsx entry point
export default App;
