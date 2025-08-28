// React hooks for component lifecycle and DOM references
import { useEffect, useRef } from "react";
// GSAP for smooth, performant scroll-triggered animations
import { gsap } from "gsap";
// ScrollTrigger plugin for scroll-based animations
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/**
 * ExpandingVideo Component
 *
 * Creates a dramatic video reveal effect where a rounded video container
 * expands from a centered, rounded rectangle to full width with square corners
 * as the user scrolls. The video remains sticky in the viewport during the
 * transformation, creating an immersive cinematic experience.
 */
const ExpandingVideo = () => {
  // Reference to the video container for animation targeting
  const videoContainerRef = useRef(null);
  // Reference to the section for scroll trigger
  const sectionRef = useRef(null);

  // Set up scroll-triggered expansion animation when component mounts
  useEffect(() => {
    // Create GSAP context for proper cleanup and scoping
    const ctx = gsap.context(() => {
      // Animate video container expansion tied to scroll position
      gsap.to(videoContainerRef.current, {
        width: "100%", // Expand from initial 52% width to full width
        borderRadius: "0px", // Transform from rounded (38px) to square corners
        ease: "none", // Linear progress tied directly to scroll
        scrollTrigger: {
          trigger: sectionRef.current, // Element that triggers the animation
          start: "top 60%", // Start when top of section reaches 60% down viewport
          end: "top 20%", // End when top of section reaches 20% down viewport
          scrub: 1, // Tie animation progress to scroll position with 1s lag
        },
      });
    }, sectionRef);

    // Cleanup function to prevent memory leaks
    return () => ctx.revert();
  }, []); // Empty dependency array - run once on mount

  return (
    // Main section with extended height (120vh) to provide scroll distance for animation
    <section ref={sectionRef} className="relative h-[120vh] bg-white pt-20">
      {/* Sticky container that stays in viewport during scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-10">
        {/* Video container that animates from 52% width with rounded corners to full width */}
        <div
          ref={videoContainerRef}
          className="relative w-[52%] overflow-hidden"
          style={{ borderRadius: "38px" }} // Initial rounded corners, animates to 0px
        >
          {/* Post Labs promotional video with optimized settings */}
          <video
            className="w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.mp4"
            autoPlay // Start playing immediately
            loop // Continuous playback
            muted // Required for autoplay in most browsers
            playsInline // Prevent fullscreen on mobile
            poster="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-poster-00001.jpg" // Fallback image
          ></video>
        </div>
      </div>

      {/* Background decorative grid - positioned behind video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-grid h-full max-w-[1400px] mx-auto">
          {/* Grid columns for visual structure */}
          <div className="floating-grid-col first"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col"></div>
          <div className="floating-grid-col last"></div>
        </div>
      </div>
    </section>
  );
};

export default ExpandingVideo;
