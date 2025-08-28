// GSAP animation library for high-performance animations
import { gsap } from "gsap";

/**
 * Animation Utilities Library
 *
 * Comprehensive collection of reusable GSAP animation functions for the Post Labs website.
 * Provides consistent animation patterns with customizable options and sensible defaults.
 * All functions return GSAP timeline instances for chaining and control.
 */

// ==================== FADE ANIMATIONS ====================

/**
 * Fade In Animation
 * Smoothly transitions an element from invisible to visible
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const fadeIn = (element, options = {}) => {
  const defaults = {
    duration: 1, // 1 second fade duration
    ease: "power3.out", // Smooth deceleration curve
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { opacity: 0 }, // Start invisible
    { opacity: 1, ...defaults, ...options } // End fully visible with merged options
  );
};

/**
 * Fade Out Animation
 * Smoothly transitions an element from visible to invisible
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const fadeOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5, // Faster fade out (500ms)
    ease: "power3.out", // Smooth deceleration curve
    delay: 0, // No delay by default
  };

  return gsap.to(element, { opacity: 0, ...defaults, ...options });
};

// ==================== SLIDE ANIMATIONS ====================

/**
 * Slide In Up Animation
 * Element slides in from below while fading in
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const slideInUp = (element, options = {}) => {
  const defaults = {
    duration: 1, // 1 second animation
    ease: "power3.out", // Smooth deceleration
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 }, // Start 50px below and invisible
    { y: 0, opacity: 1, ...defaults, ...options } // End at normal position and visible
  );
};

/**
 * Slide In Down Animation
 * Element slides in from above while fading in
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const slideInDown = (element, options = {}) => {
  const defaults = {
    duration: 1, // 1 second animation
    ease: "power3.out", // Smooth deceleration
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { y: -50, opacity: 0 }, // Start 50px above and invisible
    { y: 0, opacity: 1, ...defaults, ...options } // End at normal position and visible
  );
};

/**
 * Slide In Left Animation
 * Element slides in from the left while fading in
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const slideInLeft = (element, options = {}) => {
  const defaults = {
    duration: 1, // 1 second animation
    ease: "power3.out", // Smooth deceleration
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { x: -50, opacity: 0 }, // Start 50px to the left and invisible
    { x: 0, opacity: 1, ...defaults, ...options } // End at normal position and visible
  );
};

/**
 * Slide In Right Animation
 * Element slides in from the right while fading in
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const slideInRight = (element, options = {}) => {
  const defaults = {
    duration: 1, // 1 second animation
    ease: "power3.out", // Smooth deceleration
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { x: 50, opacity: 0 }, // Start 50px to the right and invisible
    { x: 0, opacity: 1, ...defaults, ...options } // End at normal position and visible
  );
};

// ==================== SCALE ANIMATIONS ====================

/**
 * Scale In Animation
 * Element scales in from zero size with a bouncy effect
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const scaleIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8, // Slightly faster for snappy feel
    ease: "back.out(1.7)", // Bouncy overshoot effect
    delay: 0, // No delay by default
  };

  return gsap.fromTo(
    element,
    { scale: 0, opacity: 0 }, // Start at zero size and invisible
    { scale: 1, opacity: 1, ...defaults, ...options } // End at normal size and visible
  );
};

/**
 * Scale Out Animation
 * Element scales out to zero size with a bouncy effect
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const scaleOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5, // Faster exit animation
    ease: "back.in(1.7)", // Bouncy undershoot effect
    delay: 0, // No delay by default
  };

  return gsap.to(element, { scale: 0, opacity: 0, ...defaults, ...options });
};

// ==================== STAGGER ANIMATIONS ====================

/**
 * Stagger In Animation
 * Animates multiple elements with a delay between each one
 *
 * @param {Element[]|string} elements - Array of DOM elements or selector
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const staggerIn = (elements, options = {}) => {
  const defaults = {
    duration: 0.8, // 800ms per element
    ease: "power3.out", // Smooth deceleration
    stagger: 0.1, // 100ms delay between each element
    delay: 0, // No initial delay
  };

  return gsap.fromTo(
    elements,
    { y: 30, opacity: 0 }, // Start 30px below and invisible
    { y: 0, opacity: 1, ...defaults, ...options } // End at normal position and visible
  );
};

// ==================== TEXT ANIMATIONS ====================

/**
 * Typewriter Animation
 * Simulates typing text character by character
 *
 * @param {Element} element - DOM element containing text to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const typeWriter = (element, options = {}) => {
  const defaults = {
    duration: 2, // Base duration for animation
    ease: "none", // Linear progression for consistent typing speed
  };

  const text = element.textContent; // Store original text
  element.textContent = ""; // Clear element to start with empty text

  return gsap.to(element, {
    textContent: text, // Animate to full text
    duration: defaults.duration * (text.length / 20), // Scale duration based on text length
    ease: defaults.ease,
    snap: { textContent: 1 }, // Snap to whole characters (no partial letters)
    ...options,
  });
};

// ==================== PAGE TRANSITIONS ====================

/**
 * Page Transition In Animation
 * Smooth page entrance effect with fade and slide
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const pageTransitionIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8, // 800ms transition
    ease: "power3.out", // Smooth deceleration
  };

  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 }, // Start invisible and 20px below
    { opacity: 1, y: 0, ...defaults, ...options } // End visible at normal position
  );
};

/**
 * Page Transition Out Animation
 * Smooth page exit effect with fade and slide
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation properties
 * @returns {gsap.core.Tween} GSAP tween instance
 */
export const pageTransitionOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5, // Faster exit (500ms)
    ease: "power3.in", // Smooth acceleration
  };

  return gsap.to(element, { opacity: 0, y: -20, ...defaults, ...options }); // Fade out and move up
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Create Timeline
 * Creates a new GSAP timeline for sequencing animations
 *
 * @param {Object} options - Timeline configuration options
 * @returns {gsap.core.Timeline} GSAP timeline instance
 */
export const createTimeline = (options = {}) => {
  return gsap.timeline(options);
};

/**
 * Kill All Animations
 * Immediately stops all running GSAP animations
 * Useful for cleanup or emergency stops
 */
export const killAllAnimations = () => {
  gsap.killTweensOf("*"); // Kill all tweens on all elements
};

/**
 * Set Initial State
 * Sets CSS properties on an element without animation
 *
 * @param {Element|string} element - DOM element or selector
 * @param {Object} properties - CSS properties to set
 */
export const setInitialState = (element, properties) => {
  gsap.set(element, properties);
};

// ==================== SCROLL-TRIGGERED ANIMATIONS ====================

/**
 * Create Scroll Animation
 * Creates a scroll-triggered animation using GSAP ScrollTrigger
 *
 * @param {Element|string} element - DOM element or selector to animate
 * @param {Object} options - Override default animation and ScrollTrigger properties
 * @returns {gsap.core.Tween} GSAP tween instance with ScrollTrigger
 */
export const createScrollAnimation = (element, options = {}) => {
  const defaults = {
    y: 50, // Start 50px below normal position
    opacity: 0, // Start invisible
    duration: 1, // 1 second animation
    ease: "power3.out", // Smooth deceleration
    scrollTrigger: {
      trigger: element, // Element that triggers the animation
      start: "top 80%", // Start when element's top reaches 80% down the viewport
      end: "bottom 20%", // End when element's bottom reaches 20% down the viewport
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
    },
  };

  return gsap.fromTo(
    element,
    { y: defaults.y, opacity: defaults.opacity }, // Initial state
    { y: 0, opacity: 1, ...defaults, ...options } // Final state with merged options
  );
};

// ==================== MOUSE/HOVER ANIMATIONS ====================

/**
 * Hover Scale Animation
 * Adds smooth scale effect on mouse hover with event cleanup
 *
 * @param {Element} element - DOM element to add hover effect to
 * @param {number} scale - Scale factor on hover (default: 1.05 = 5% larger)
 * @returns {Function} Cleanup function to remove event listeners
 */
export const hoverScale = (element, scale = 1.05) => {
  let isHovered = false; // Prevent duplicate animations

  // Handle mouse enter - scale up
  const handleMouseEnter = () => {
    if (!isHovered) {
      isHovered = true;
      gsap.to(element, {
        scale, // Scale to specified size
        duration: 0.3, // Quick 300ms animation
        ease: "power2.out", // Smooth deceleration
      });
    }
  };

  // Handle mouse leave - scale back to normal
  const handleMouseLeave = () => {
    if (isHovered) {
      isHovered = false;
      gsap.to(element, {
        scale: 1, // Return to normal size
        duration: 0.3, // Quick 300ms animation
        ease: "power2.out", // Smooth deceleration
      });
    }
  };

  // Add event listeners
  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function to remove event listeners
  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
