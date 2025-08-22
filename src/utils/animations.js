import { gsap } from "gsap";

/**
 * Common animation utilities using GSAP
 */

// Fade animations
export const fadeIn = (element, options = {}) => {
  const defaults = {
    duration: 1,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, ...defaults, ...options }
  );
};

export const fadeOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.to(element, { opacity: 0, ...defaults, ...options });
};

// Slide animations
export const slideInUp = (element, options = {}) => {
  const defaults = {
    duration: 1,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, ...defaults, ...options }
  );
};

export const slideInDown = (element, options = {}) => {
  const defaults = {
    duration: 1,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ...defaults, ...options }
  );
};

export const slideInLeft = (element, options = {}) => {
  const defaults = {
    duration: 1,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, ...defaults, ...options }
  );
};

export const slideInRight = (element, options = {}) => {
  const defaults = {
    duration: 1,
    ease: "power3.out",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, ...defaults, ...options }
  );
};

// Scale animations
export const scaleIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0,
  };

  return gsap.fromTo(
    element,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, ...defaults, ...options }
  );
};

export const scaleOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5,
    ease: "back.in(1.7)",
    delay: 0,
  };

  return gsap.to(element, { scale: 0, opacity: 0, ...defaults, ...options });
};

// Stagger animations
export const staggerIn = (elements, options = {}) => {
  const defaults = {
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
    delay: 0,
  };

  return gsap.fromTo(
    elements,
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, ...defaults, ...options }
  );
};

// Text animations
export const typeWriter = (element, options = {}) => {
  const defaults = {
    duration: 2,
    ease: "none",
  };

  const text = element.textContent;
  element.textContent = "";

  return gsap.to(element, {
    textContent: text,
    duration: defaults.duration * (text.length / 20),
    ease: defaults.ease,
    snap: { textContent: 1 },
    ...options,
  });
};

// Page transitions
export const pageTransitionIn = (element, options = {}) => {
  const defaults = {
    duration: 0.8,
    ease: "power3.out",
  };

  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, ...defaults, ...options }
  );
};

export const pageTransitionOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5,
    ease: "power3.in",
  };

  return gsap.to(element, { opacity: 0, y: -20, ...defaults, ...options });
};

// Utility functions
export const createTimeline = (options = {}) => {
  return gsap.timeline(options);
};

export const killAllAnimations = () => {
  gsap.killTweensOf("*");
};

export const setInitialState = (element, properties) => {
  gsap.set(element, properties);
};

// Scroll-triggered animations
export const createScrollAnimation = (element, options = {}) => {
  const defaults = {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  };

  return gsap.fromTo(
    element,
    { y: defaults.y, opacity: defaults.opacity },
    { y: 0, opacity: 1, ...defaults, ...options }
  );
};

// Mouse/hover animations
export const hoverScale = (element, scale = 1.05) => {
  let isHovered = false;

  const handleMouseEnter = () => {
    if (!isHovered) {
      isHovered = true;
      gsap.to(element, { scale, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (isHovered) {
      isHovered = false;
      gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
