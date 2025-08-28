// Import React hooks for managing side effects and DOM references
import { useEffect, useRef } from "react";
// Import GSAP animation library for complex scroll-driven animations
import { gsap } from "gsap";
// Import ScrollTrigger plugin for scroll-based animation triggers
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin globally to enable scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollingVideoText component - creates an immersive scroll-driven video experience
 * Features three different videos that transition based on scroll position with synchronized text changes
 *
 * Animation Flow:
 * 1. "Built for Scale" - Video 1 visible, text highlighted
 * 2. "Built for Creators" - Video 2 visible, text highlighted
 * 3. "Built for Canada" - Video 3 visible, text highlighted
 *
 * Uses GSAP ScrollTrigger with pinning to create a storytelling experience
 * Videos and text opacity change simultaneously as user scrolls
 */
const ScrollingVideoText = () => {
  // Reference to the main section for ScrollTrigger attachment
  const sectionRef = useRef(null);

  // References to the three background videos
  const video1Ref = useRef(null); // "Scale" video
  const video2Ref = useRef(null); // "Creators" video
  const video3Ref = useRef(null); // "Canada" video

  // References to the three text elements for opacity animation
  const text1Ref = useRef(null); // "Scale" text
  const text2Ref = useRef(null); // "Creators" text
  const text3Ref = useRef(null); // "Canada" text

  // Effect runs on component mount to set up scroll-driven animations
  useEffect(() => {
    // Create GSAP context for automatic cleanup and scoping
    const ctx = gsap.context(() => {
      // Set initial states for text elements
      // "Scale" starts highlighted, others are dimmed
      gsap.set(text1Ref.current, { opacity: 1 }); // "Scale" - fully visible (active state)
      gsap.set(text2Ref.current, { opacity: 0.3 }); // "Creators" - dimmed (inactive state)
      gsap.set(text3Ref.current, { opacity: 0.3 }); // "Canada" - dimmed (inactive state)

      // Set initial states for video elements
      // Only first video is visible, others are hidden
      gsap.set(video1Ref.current, { opacity: 1 }); // "Scale" video - visible
      gsap.set(video2Ref.current, { opacity: 0 }); // "Creators" video - hidden
      gsap.set(video3Ref.current, { opacity: 0 }); // "Canada" video - hidden

      // Create GSAP timeline with ScrollTrigger for scroll-driven animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current, // Element that triggers the animation
          start: "top top", // Animation starts when section reaches top of viewport
          end: "+=2000", // Animation ends after 2000px of scroll distance
          scrub: 1, // Smooth scrubbing - animation tied directly to scroll position
          pin: true, // Pin the section in place while animation plays
        },
      });

      // First transition: "Scale" → "Creators" (at timeline position 1)
      // All animations at position 1 happen simultaneously for synchronized transition
      tl.to(text1Ref.current, { opacity: 0.3, duration: 0.5 }, 1) // Dim "Scale" text
        .to(video1Ref.current, { opacity: 0, duration: 0.5 }, 1) // Hide "Scale" video
        .to(text2Ref.current, { opacity: 1, duration: 0.5 }, 1) // Highlight "Creators" text
        .to(video2Ref.current, { opacity: 1, duration: 0.5 }, 1); // Show "Creators" video

      // Second transition: "Creators" → "Canada" (at timeline position 2)
      // All animations at position 2 happen simultaneously for synchronized transition
      tl.to(text2Ref.current, { opacity: 0.3, duration: 0.5 }, 2) // Dim "Creators" text
        .to(video2Ref.current, { opacity: 0, duration: 0.5 }, 2) // Hide "Creators" video
        .to(text3Ref.current, { opacity: 1, duration: 0.5 }, 2) // Highlight "Canada" text
        .to(video3Ref.current, { opacity: 1, duration: 0.5 }, 2); // Show "Canada" video
    }, sectionRef); // Scope the GSAP context to the section element

    // Cleanup function runs when component unmounts
    // Revert all GSAP animations and kill ScrollTriggers to prevent memory leaks
    return () => ctx.revert();
  }, []); // Empty dependency array - effect runs only once on mount

  return (
    // Main section container - full screen height with relative positioning for layered content
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Video background layer - positioned behind text content */}
      <div className="absolute inset-0 z-0">
        {/* Video 1: "Scale" - Initial video, covers full screen */}
        <video
          ref={video1Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F6827802fb93caba00853824a_video2-transcode.mp4"
          autoPlay // Start playing immediately
          loop // Continuous playback
          muted // Required for autoplay in most browsers
          playsInline // Prevent fullscreen on mobile devices
        />

        {/* Video 2: "Creators" - Second video, initially hidden */}
        <video
          ref={video2Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682dd7a24d93a7df690274d9_post-labs-video-3-transcode.mp4"
          autoPlay // Start playing immediately (even when hidden for smooth transitions)
          loop // Continuous playback
          muted // Required for autoplay in most browsers
          playsInline // Prevent fullscreen on mobile devices
        />

        {/* Video 3: "Canada" - Third video, initially hidden */}
        <video
          ref={video3Ref}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4"
          autoPlay // Start playing immediately (even when hidden for smooth transitions)
          loop // Continuous playback
          muted // Required for autoplay in most browsers
          playsInline // Prevent fullscreen on mobile devices
        />
      </div>

      {/* Text overlay layer - positioned above video background */}
      <div className="relative z-10 h-full flex items-center justify-start text-white pl-4 md:pl-16">
        {/* Main text container with large typography */}
        <div className="flex items-start text-4xl md:text-6xl font-medium">
          {/* Static "Built for" text with spacing */}
          <span className="mr-4 mt-2">Built for</span>
          {/* Dynamic text stack - changes opacity based on scroll */}
          <div className="flex flex-col">
            {/* Text 1: "Scale" - starts visible, dims during scroll */}
            <div ref={text1Ref}>Scale</div>
            {/* Text 2: "Creators" - starts dimmed, highlights in middle */}
            <div ref={text2Ref}>Creators</div>
            {/* Text 3: "Canada" - starts dimmed, highlights at end */}
            <div ref={text3Ref}>Canada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export as default for use in About page layout
export default ScrollingVideoText;
