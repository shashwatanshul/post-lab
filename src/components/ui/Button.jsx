// Import Framer Motion for smooth hover and tap animations
import { motion } from "framer-motion";
// Import forwardRef to properly handle ref forwarding for external libraries
import { forwardRef } from "react";

/**
 * Reusable Button component with multiple variants, sizes, loading states, and animations
 * Uses forwardRef for compatibility with external libraries and Framer Motion for interactions
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text or content
 * @param {string} props.variant - Button style: "primary" | "secondary" | "outline" | "ghost" | "danger"
 * @param {string} props.size - Button size: "sm" | "md" | "lg" | "xl"
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disable button interactions
 * @param {boolean} props.loading - Show loading spinner and disable interactions
 * @param {React.ReactNode} props.icon - Optional icon to display
 * @param {string} props.iconPosition - Icon position: "left" | "right"
 * @param {Function} props.onClick - Click handler function
 * @param {Object} props...props - Additional button props (type, aria-*, data-*, etc.)
 * @param {React.Ref} ref - Forwarded ref for the button element
 *
 * Usage:
 * <Button variant="primary" size="lg" loading={isSubmitting} icon={<SaveIcon />}>
 *   Save Changes
 * </Button>
 */
const Button = forwardRef(
  (
    {
      children, // Button content (text, elements)
      variant = "primary", // Default to primary blue styling
      size = "md", // Default to medium size
      className = "", // Additional custom classes
      disabled = false, // Button enabled by default
      loading = false, // Not loading by default
      icon, // Optional icon element
      iconPosition = "left", // Default icon position
      onClick, // Click event handler
      ...props // Spread remaining props (type, aria-*, data-*, etc.)
    },
    ref // Forwarded ref for external access
  ) => {
    // Base classes applied to all button variants for consistent behavior
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    // Button variant styles for different use cases and visual hierarchy
    const variants = {
      // Main action button - prominent blue styling
      primary:
        "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
      // Secondary action button - subtle gray styling
      secondary:
        "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500",
      // Outlined button - borders with fill on hover
      outline:
        "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500",
      // Minimal button - text with subtle hover background
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
      // Destructive action button - red warning styling
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    };

    // Button size variations for different contexts and importance levels
    const sizes = {
      sm: "px-3 py-1.5 text-sm", // Small - for compact spaces or secondary actions
      md: "px-4 py-2 text-base", // Medium - default size for most use cases
      lg: "px-6 py-3 text-lg", // Large - for prominent actions or calls-to-action
      xl: "px-8 py-4 text-xl", // Extra large - for hero sections or major actions
    };

    // Combine all classes: base styles + variant + size + custom classes
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    // Button content with conditional rendering for loading, icons, and text
    const buttonContent = (
      <>
        {/* Loading spinner - only shown when loading is true */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4" // Tailwind animation with positioning
            fill="none"
            viewBox="0 0 24 24"
          >
            {/* Background circle - provides context for the spinning arc */}
            <circle
              className="opacity-25"
              cx="12" // Center X
              cy="12" // Center Y
              r="10" // Radius
              stroke="currentColor" // Inherits text color from button variant
              strokeWidth="4"
            ></circle>
            {/* Foreground arc - creates the spinning effect */}
            <path
              className="opacity-75"
              fill="currentColor"
              // SVG path data for partial circle that creates spinning visual
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {/* Left-positioned icon - only shown when not loading */}
        {icon && iconPosition === "left" && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        {/* Button text/content */}
        {children}
        {/* Right-positioned icon - only shown when not loading */}
        {icon && iconPosition === "right" && !loading && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    return (
      // Framer Motion button with hover and tap animations
      <motion.button
        ref={ref} // Forward ref for external access
        className={classes} // Combined CSS classes
        disabled={disabled || loading} // Disable when explicitly disabled or loading
        onClick={onClick} // Click event handler
        // Hover animation - slight scale up when not disabled/loading
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        // Tap animation - slight scale down when not disabled/loading
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        // Smooth transition timing for all animations
        transition={{ duration: 0.2 }}
        {...props} // Spread additional props (type, aria-*, data-*, etc.)
      >
        {buttonContent}
      </motion.button>
    );
  }
);

// Set display name for better debugging and dev tools support
Button.displayName = "Button";

// Export as default for use throughout the application
export default Button;
