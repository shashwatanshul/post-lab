// Import Framer Motion for smooth animations and transitions
import { motion } from "framer-motion";

/**
 * Reusable loading spinner component with customizable size, color, and optional text
 * Uses Framer Motion for smooth rotation animation and text fade-in
 *
 * @param {Object} props
 * @param {string} props.size - Spinner size: "sm" | "md" | "lg" | "xl" (default: "md")
 * @param {string} props.color - Spinner color theme: "primary" | "secondary" | "white" | "dark" (default: "primary")
 * @param {string} props.className - Additional CSS classes for the container
 * @param {string|null} props.text - Optional loading text displayed below spinner
 *
 * Usage:
 * <LoadingSpinner size="lg" color="primary" text="Loading..." />
 */
const LoadingSpinner = ({
  size = "md", // Default medium size
  color = "primary", // Default primary blue color
  className = "", // Additional custom classes
  text = null, // Optional loading text
}) => {
  // Size configuration mapping to Tailwind CSS classes
  const sizes = {
    sm: "w-4 h-4", // 16x16px - for inline/small contexts
    md: "w-8 h-8", // 32x32px - default size for most use cases
    lg: "w-12 h-12", // 48x48px - for prominent loading states
    xl: "w-16 h-16", // 64x64px - for full-page loading screens
  };

  // Color theme configuration using design system colors
  const colors = {
    primary: "text-primary-600", // Main brand blue color
    secondary: "text-gray-600", // Neutral gray for subtle contexts
    white: "text-white", // For dark backgrounds
    dark: "text-gray-900", // High contrast dark color
  };

  return (
    // Main container with flex layout for centering spinner and optional text
    <div
      className={`flex flex-col items-center justify-center space-y-2 ${className}`}
    >
      {/* Animated spinner container using Framer Motion */}
      <motion.div
        className={`${sizes[size]} ${colors[color]}`}
        // Continuous 360-degree rotation animation
        animate={{ rotate: 360 }}
        // 1-second linear rotation, infinite loop for smooth spinning effect
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        {/* SVG spinner icon with circular design */}
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          {/* Background circle - subtle opacity for context */}
          <circle
            className="opacity-25"
            cx="12" // Center X coordinate
            cy="12" // Center Y coordinate
            r="10" // Radius
            stroke="currentColor" // Uses the color from parent text class
            strokeWidth="4" // Thickness of the circle outline
          />
          {/* Foreground arc - creates the spinning effect */}
          <path
            className="opacity-75" // Higher opacity for the active part
            fill="currentColor" // Filled with current text color
            // SVG path data creating a partial circle (arc) that appears to "chase" around
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </motion.div>

      {/* Optional loading text with fade-in animation */}
      {text && (
        <motion.p
          className={`text-sm ${colors[color]}`} // Small text matching spinner color
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in to full opacity
          transition={{ delay: 0.2 }} // Slight delay after spinner appears for staggered effect
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Export as default for use throughout the application
export default LoadingSpinner;
